'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/app/theme/useTheme';
import { getColorThemes, setActiveTheme, type ColorTheme } from '@/app/lib/supabase';

export default function AdminPanel() {
  const { colors, updateColors } = useTheme();
  const [themes, setThemes] = useState<ColorTheme[]>([]);
  const [currentTheme, setCurrentTheme] = useState<string>('');
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState<string>('');

  useEffect(() => {
    loadThemes();
  }, []);

  async function loadThemes() {
    setIsLoading(true);
    const fetchedThemes = await getColorThemes();
    setThemes(fetchedThemes);

    const activeTheme = fetchedThemes.find(t => t.is_active);
    if (activeTheme) {
      setCurrentTheme(activeTheme.name);
      updateColors(activeTheme.colors);
    }
    setIsLoading(false);
  }

  async function handleThemeChange(themeName: string) {
    setCurrentTheme(themeName);
    const theme = themes.find(t => t.name === themeName);
    if (theme) {
      updateColors(theme.colors);
      setIsSaving(true);
      setSaveMessage('');

      try {
        await setActiveTheme(themeName);
        setSaveMessage('✅ Tema guardado y sincronizado');
        setTimeout(() => setSaveMessage(''), 3000);
      } catch (error) {
        setSaveMessage('❌ Error al guardar');
        setTimeout(() => setSaveMessage(''), 3000);
      } finally {
        setIsSaving(false);
      }
    }
  }

  const handlePrimaryColorChange = (newColor: string) => {
    updateColors({ primary: newColor });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.primaryLight }}>
      {/* Header */}
      <div className="border-b sticky top-0 z-30 backdrop-blur-sm" style={{ borderColor: colors.sidebarBorder, backgroundColor: `${colors.background}99` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="flex justify-between items-start gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold" style={{ color: colors.primary }}>
                🎨 Gestor de Temas
              </h1>
              <p className="text-base mt-2" style={{ color: colors.textMuted }}>
                Elige un tema predefinido o personaliza los colores
              </p>
            </div>
            {saveMessage && (
              <div className="px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap" style={{ backgroundColor: colors.primaryLight, color: colors.primary }}>
                {saveMessage}
              </div>
            )}
            {isSaving && (
              <div className="px-4 py-2 rounded-lg text-sm font-semibold" style={{ backgroundColor: colors.accent, color: 'white' }}>
                ⏳ Guardando...
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_1fr]">
          {/* Sección Izquierda - Temas */}
          <div className="space-y-6">
            {/* Temas predefinidos */}
            <div className="rounded-3xl p-8" style={{ backgroundColor: colors.background, border: `2px solid ${colors.sidebarBorder}` }}>
              <h2 className="text-2xl font-bold mb-6" style={{ color: colors.primary }}>
                📚 Temas Predefinidos
              </h2>
              <div className="space-y-3">
                {isLoading ? (
                  <p style={{ color: colors.textMuted }}>Cargando temas...</p>
                ) : (
                  themes.map((theme) => (
                    <button
                      key={theme.id}
                      onClick={() => {
                        handleThemeChange(theme.name);
                        setIsCustomizing(false);
                      }}
                      className={`w-full text-left rounded-2xl p-5 transition-all border-2 ${
                        currentTheme === theme.name ? 'border-2' : 'border-2 border-transparent'
                      }`}
                      style={{
                        backgroundColor: currentTheme === theme.name ? colors.primaryLight : colors.background,
                        borderColor: currentTheme === theme.name ? colors.primary : colors.borderMuted,
                        color: colors.primary,
                      }}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-bold text-lg">{theme.name}</h3>
                          <p className="text-sm mt-1" style={{ color: colors.textMuted }}>
                            {theme.description}
                          </p>
                        </div>
                        {currentTheme === theme.name && (
                          <span className="text-2xl">✓</span>
                        )}
                      </div>

                      {/* Color preview */}
                      <div className="flex gap-2 mt-4">
                        {[
                          theme.colors.primary,
                          theme.colors.secondary,
                          theme.colors.accent,
                          theme.colors.surface,
                        ].map((color, idx) => (
                          <div
                            key={idx}
                            className="h-8 w-8 rounded-lg shadow-sm"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </button>
                  ))
                )}
              </div>
            </div>

            {/* Personalización */}
            {isCustomizing && (
              <div className="rounded-3xl p-8" style={{ backgroundColor: colors.background, border: `2px solid ${colors.secondary}` }}>
                <h2 className="text-2xl font-bold mb-6" style={{ color: colors.primary }}>
                  🎯 Personalizar Color Principal
                </h2>
                <p className="text-sm mb-4" style={{ color: colors.textMuted }}>
                  Elige el color principal que se aplicará en todo el sitio (encabezados, botones, texto)
                </p>

                <div className="space-y-4">
                  <div className="flex gap-4 items-end">
                    <div className="flex-1">
                      <label className="text-sm font-semibold block mb-2" style={{ color: colors.primary }}>
                        Color Principal
                      </label>
                      <input
                        type="color"
                        value={colors.primary}
                        onChange={(e) => handlePrimaryColorChange(e.target.value)}
                        className="w-full h-16 rounded-xl cursor-pointer border-2"
                        style={{ borderColor: colors.sidebarBorder }}
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-xs font-mono" style={{ color: colors.textMuted }}>
                        {colors.primary}
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setIsCustomizing(false);
                    handleThemeChange(currentTheme);
                  }}
                  className="w-full mt-6 rounded-xl py-3 font-semibold transition-opacity hover:opacity-90"
                  style={{ backgroundColor: colors.primary, color: colors.background }}
                >
                  Listo
                </button>
              </div>
            )}

            {!isCustomizing && (
              <button
                onClick={() => setIsCustomizing(true)}
                className="w-full rounded-3xl p-5 font-semibold transition-all border-2"
                style={{
                  backgroundColor: colors.background,
                  borderColor: colors.secondary,
                  color: colors.secondary,
                }}
              >
                ✏️ Personalizar color principal
              </button>
            )}
          </div>

          {/* Sección Derecha - Preview */}
          <div className="sticky top-32 h-fit">
            <div className="rounded-3xl overflow-hidden border-4 shadow-2xl" style={{ borderColor: colors.sidebarBorder }}>
              <div className="bg-white max-h-[calc(100vh-200px)] overflow-y-auto">
                {/* Header Preview */}
                <div className="border-b px-6 py-5" style={{ borderColor: colors.sidebarBorder, backgroundColor: colors.primaryLight }}>
                  <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold" style={{ color: colors.primary }}>
                      Logo
                    </h1>
                    <button
                      className="rounded-full px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                      style={{ backgroundColor: colors.accent }}
                    >
                      Contacto
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                  {/* Título con degradado */}
                  <div>
                    <p className="text-xs font-semibold uppercase" style={{ color: colors.secondary }}>
                      Consultoría DIH
                    </p>
                    <h2 className="text-3xl font-bold mt-2 text-brand-gradient leading-tight">
                      Terapia psicológica para tu bienestar
                    </h2>
                  </div>

                  {/* Botones */}
                  <div className="flex flex-col gap-3">
                    <button
                      className="rounded-full py-3 px-4 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                      style={{ backgroundColor: colors.primary }}
                    >
                      Agendar cita
                    </button>
                    <button
                      className="rounded-full py-3 px-4 text-sm font-semibold border-2 transition-colors"
                      style={{ color: colors.primary, borderColor: colors.sidebarBorder }}
                    >
                      Ver servicios
                    </button>
                  </div>

                  {/* Card */}
                  <div className="rounded-2xl p-5" style={{ backgroundColor: colors.surface }}>
                    <p className="text-xs font-semibold uppercase" style={{ color: colors.secondary }}>
                      Sección destacada
                    </p>
                    <h3 className="font-bold mt-2" style={{ color: colors.primary }}>
                      Contenido importante
                    </h3>
                  </div>

                  {/* Service cards */}
                  <div className="space-y-3">
                    {['Servicio 1', 'Servicio 2', 'Servicio 3'].map((service, idx) => (
                      <div
                        key={service}
                        className="rounded-xl p-4 border"
                        style={{
                          backgroundColor: colors.background,
                          borderColor: colors.sidebarBorder,
                        }}
                      >
                        <div
                          className="h-1 w-12 rounded-full mb-2"
                          style={{
                            backgroundColor:
                              idx === 0 ? colors.primary : idx === 1 ? colors.secondary : colors.accent,
                          }}
                        />
                        <p className="font-semibold text-sm" style={{ color: colors.primary }}>
                          {service}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Sidebar */}
                  <div
                    className="rounded-xl p-4 border"
                    style={{
                      backgroundColor: colors.sidebarBg,
                      borderColor: colors.sidebarBorder,
                      color: colors.sidebarText,
                    }}
                  >
                    <h4 className="font-bold mb-3">Datos de contacto</h4>
                    <div className="text-sm space-y-2">
                      <p>📞 +52 222 203 1068</p>
                      <p>📍 San Andrés Cholula</p>
                      <p>🌐 En línea</p>
                    </div>
                  </div>
                </div>

                {/* Footer Preview */}
                <div
                  className="border-t px-6 py-5"
                  style={{
                    borderColor: colors.footerBorder,
                    backgroundColor: colors.footerBg,
                    color: colors.footerText,
                  }}
                >
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold mb-2">Servicios</p>
                      <ul className="space-y-1 text-xs opacity-70">
                        <li>Terapia individual</li>
                        <li>Terapia de pareja</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">Información</p>
                      <ul className="space-y-1 text-xs opacity-70">
                        <li>Sobre mí</li>
                        <li>Contacto</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-xs mt-4 text-center opacity-70">
                    © 2026 Consultoría DIH. Todos los derechos reservados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
