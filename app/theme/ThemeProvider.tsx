'use client';

import { ReactNode, useState, useEffect } from 'react';
import { defaultColors, ColorScheme } from './colors';
import { getActiveTheme, supabase } from '@/app/lib/supabase';
import {
  ThemeContext,
  applyThemeVariables,
  saveThemeToStorage,
  loadThemeFromStorage,
  notifyThemeChange,
} from './useTheme';

interface ThemeProviderProps {
  children: ReactNode;
  initialColors?: Partial<ColorScheme>;
}

export function ThemeProvider({
  children,
  initialColors,
}: ThemeProviderProps) {
  const [colors, setColors] = useState<ColorScheme>(defaultColors);
  const [isLoading, setIsLoading] = useState(true);

  // Cargar tema al montar el componente y suscribirse a cambios
  useEffect(() => {
    async function loadTheme() {
      try {
        // Intentar cargar tema activo de Supabase
        const activeTheme = await getActiveTheme();
        if (activeTheme) {
          setColors(activeTheme.colors as ColorScheme);
          applyThemeVariables(activeTheme.colors as ColorScheme);

          // Aplicar colores del gradiente
          const root = document.documentElement;
          root.style.setProperty('--gradient-color-1', activeTheme.gradient_color_1);
          root.style.setProperty('--gradient-color-2', activeTheme.gradient_color_2);
          root.style.setProperty('--gradient-color-3', activeTheme.gradient_color_3);

          setIsLoading(false);

          // Suscribirse a cambios de Supabase Realtime
          const channel = supabase
            .channel('color_themes_changes')
            .on(
              'postgres_changes',
              { event: 'UPDATE', schema: 'public', table: 'color_themes' },
              (payload) => {
                if (payload.new.is_active) {
                  const newColors = (payload.new as any).colors as ColorScheme;
                  setColors(newColors);
                  applyThemeVariables(newColors);

                  // Aplicar colores del gradiente
                  const root = document.documentElement;
                  root.style.setProperty('--gradient-color-1', (payload.new as any).gradient_color_1);
                  root.style.setProperty('--gradient-color-2', (payload.new as any).gradient_color_2);
                  root.style.setProperty('--gradient-color-3', (payload.new as any).gradient_color_3);

                  notifyThemeChange(newColors);
                }
              }
            )
            .subscribe();

          return () => {
            channel.unsubscribe();
          };
        }
      } catch (error) {
        console.error('Error cargando tema de Supabase:', error);
      }

      // Fallback: usar localStorage o colores por defecto
      const storedColors = loadThemeFromStorage();
      const themesToUse = {
        ...defaultColors,
        ...(storedColors || initialColors || {}),
      };

      setColors(themesToUse);
      applyThemeVariables(themesToUse);
      setIsLoading(false);
    }

    loadTheme();
  }, [initialColors]);

  // Aplicar variables CSS cuando cambian los colores
  useEffect(() => {
    applyThemeVariables(colors);
  }, [colors]);

  const updateColors = (newColors: Partial<ColorScheme>) => {
    setColors((prevColors) => {
      const updatedColors = { ...prevColors, ...newColors };
      saveThemeToStorage(updatedColors);
      applyThemeVariables(updatedColors);
      return updatedColors;
    });

    // Aquí se llamará a Supabase para guardar en la BD
    // saveToDatabaseLater(updatedColors);
  };

  return (
    <ThemeContext.Provider value={{ colors, updateColors, isLoading }}>
      {children}
    </ThemeContext.Provider>
  );
}
