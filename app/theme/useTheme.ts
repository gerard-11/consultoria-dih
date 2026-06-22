'use client';

import { useEffect, useState, useCallback, useContext, createContext } from 'react';
import { defaultColors, ColorScheme } from './colors';

// Contexto global del tema
export const ThemeContext = createContext<{
  colors: ColorScheme;
  updateColors: (newColors: Partial<ColorScheme>) => void;
  isLoading: boolean;
}>({
  colors: defaultColors,
  updateColors: () => {},
  isLoading: true,
});

// Hook para acceder al tema desde cualquier componente
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe usarse dentro de ThemeProvider');
  }
  return context;
}

// Aplicar variables CSS al documento
export function applyThemeVariables(colors: ColorScheme) {
  const root = document.documentElement;

  Object.entries(colors).forEach(([key, value]) => {
    if (typeof value === 'string') {
      // Convertir camelCase a kebab-case
      const cssVarName = `--color-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
      root.style.setProperty(cssVarName, value);
    }
  });
}

// Guardar colores en localStorage como respaldo
export function saveThemeToStorage(colors: ColorScheme) {
  try {
    localStorage.setItem('theme-colors', JSON.stringify(colors));
  } catch (error) {
    console.error('Error guardando tema en localStorage:', error);
  }
}

// Cargar colores de localStorage
export function loadThemeFromStorage(): ColorScheme | null {
  try {
    const stored = localStorage.getItem('theme-colors');
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    console.error('Error cargando tema de localStorage:', error);
    return null;
  }
}

// Notificar a otras pestañas que el tema cambió
export function notifyThemeChange(colors: ColorScheme) {
  localStorage.setItem('theme-changed', JSON.stringify({ colors, timestamp: Date.now() }));
}
