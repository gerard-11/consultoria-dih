// Paleta simplificada y clara
export const defaultColors = {
  // Colores principales
  primary: '#7868a0',           // Púrpura - Encabezados, texto principal, botones
  primaryLight: '#e8e0e8',      // Púrpura claro - Fondos suaves

  // Colores secundarios
  secondary: '#008898',         // Teal - Acentos, botones secundarios
  accent: '#f8a090',            // Salmón - Botones destacados

  // Fondos y superficies
  background: '#ffffff',        // Fondo principal
  surface: '#f8f0f0',           // Fondo de tarjetas (rosado claro)

  // Sidebars y elementos laterales
  sidebarBg: '#ffffff',
  sidebarBorder: '#e8dce8',
  sidebarText: '#7868a0',

  // Footers
  footerBg: '#f8f0f0',
  footerText: '#7868a0',
  footerBorder: '#e8dce8',

  // Estados
  textMuted: '#7868a0cc',
  borderMuted: '#e8dce8',
};

export type ColorScheme = typeof defaultColors;

// Temas predefinidos (combinaciones que funcionan bien)
export const colorThemes = {
  professional: {
    name: 'Profesional',
    description: 'Tonos púrpura y azul profesionales',
    colors: {
      primary: '#5c5a8a',
      primaryLight: '#e8e0e8',
      secondary: '#008898',
      accent: '#e08878',
      background: '#ffffff',
      surface: '#f8f0f0',
      sidebarBg: '#f3f0f8',
      sidebarBorder: '#e0dce8',
      sidebarText: '#5c5a8a',
      footerBg: '#f8f0f0',
      footerText: '#5c5a8a',
      footerBorder: '#e0dce8',
      textMuted: '#5c5a8acc',
      borderMuted: '#e0dce8',
    } as ColorScheme,
  },
  warm: {
    name: 'Cálido',
    description: 'Tonos cálidos y acogedores',
    colors: {
      primary: '#8b5a5f',
      primaryLight: '#f0e8e8',
      secondary: '#c97a5c',
      accent: '#d9a574',
      background: '#ffffff',
      surface: '#faf5f0',
      sidebarBg: '#f8f2f0',
      sidebarBorder: '#e8dcd8',
      sidebarText: '#8b5a5f',
      footerBg: '#faf5f0',
      footerText: '#8b5a5f',
      footerBorder: '#e8dcd8',
      textMuted: '#8b5a5fcc',
      borderMuted: '#e8dcd8',
    } as ColorScheme,
  },
  modern: {
    name: 'Moderno',
    description: 'Tonos azules y verdes modernos',
    colors: {
      primary: '#2c5aa0',
      primaryLight: '#e8f0f8',
      secondary: '#00a878',
      accent: '#f7b500',
      background: '#ffffff',
      surface: '#f0f8ff',
      sidebarBg: '#e8f0f8',
      sidebarBorder: '#d8e8f0',
      sidebarText: '#2c5aa0',
      footerBg: '#f0f8ff',
      footerText: '#2c5aa0',
      footerBorder: '#d8e8f0',
      textMuted: '#2c5aa0cc',
      borderMuted: '#d8e8f0',
    } as ColorScheme,
  },
  natural: {
    name: 'Natural',
    description: 'Tonos naturales y neutros',
    colors: {
      primary: '#6b7280',
      primaryLight: '#f3f4f6',
      secondary: '#7c3aed',
      accent: '#ec4899',
      background: '#ffffff',
      surface: '#f9fafb',
      sidebarBg: '#f3f4f6',
      sidebarBorder: '#e5e7eb',
      sidebarText: '#6b7280',
      footerBg: '#f9fafb',
      footerText: '#6b7280',
      footerBorder: '#e5e7eb',
      textMuted: '#6b7280cc',
      borderMuted: '#e5e7eb',
    } as ColorScheme,
  },
  sunset: {
    name: 'Atardecer',
    description: 'Tonos cálidos dorados y naranjas',
    colors: {
      primary: '#d97706',
      primaryLight: '#fed7aa',
      secondary: '#ea580c',
      accent: '#f59e0b',
      background: '#ffffff',
      surface: '#fff7ed',
      sidebarBg: '#fef3c7',
      sidebarBorder: '#fee2e2',
      sidebarText: '#d97706',
      footerBg: '#fff7ed',
      footerText: '#d97706',
      footerBorder: '#fee2e2',
      textMuted: '#d97706cc',
      borderMuted: '#fee2e2',
    } as ColorScheme,
  },
  forest: {
    name: 'Bosque',
    description: 'Tonos verdes y naturales',
    colors: {
      primary: '#059669',
      primaryLight: '#d1fae5',
      secondary: '#047857',
      accent: '#10b981',
      background: '#ffffff',
      surface: '#f0fdf4',
      sidebarBg: '#d1fae5',
      sidebarBorder: '#d1fae5',
      sidebarText: '#059669',
      footerBg: '#f0fdf4',
      footerText: '#059669',
      footerBorder: '#d1fae5',
      textMuted: '#059669cc',
      borderMuted: '#d1fae5',
    } as ColorScheme,
  },
  ocean: {
    name: 'Océano',
    description: 'Tonos azules profundos',
    colors: {
      primary: '#0369a1',
      primaryLight: '#e0f2fe',
      secondary: '#0284c7',
      accent: '#0ea5e9',
      background: '#ffffff',
      surface: '#f0f9ff',
      sidebarBg: '#e0f2fe',
      sidebarBorder: '#cffafe',
      sidebarText: '#0369a1',
      footerBg: '#f0f9ff',
      footerText: '#0369a1',
      footerBorder: '#cffafe',
      textMuted: '#0369a1cc',
      borderMuted: '#cffafe',
    } as ColorScheme,
  },
  rose: {
    name: 'Rosa',
    description: 'Tonos rosados elegantes',
    colors: {
      primary: '#be185d',
      primaryLight: '#fbcfe8',
      secondary: '#ec4899',
      accent: '#f472b6',
      background: '#ffffff',
      surface: '#fdf2f8',
      sidebarBg: '#fce7f3',
      sidebarBorder: '#fbcfe8',
      sidebarText: '#be185d',
      footerBg: '#fdf2f8',
      footerText: '#be185d',
      footerBorder: '#fbcfe8',
      textMuted: '#be185dcc',
      borderMuted: '#fbcfe8',
    } as ColorScheme,
  },
  slate: {
    name: 'Pizarra',
    description: 'Tonos profesionales oscuros',
    colors: {
      primary: '#1e293b',
      primaryLight: '#e2e8f0',
      secondary: '#475569',
      accent: '#64748b',
      background: '#ffffff',
      surface: '#f8fafc',
      sidebarBg: '#e2e8f0',
      sidebarBorder: '#e2e8f0',
      sidebarText: '#1e293b',
      footerBg: '#f8fafc',
      footerText: '#1e293b',
      footerBorder: '#e2e8f0',
      textMuted: '#1e293bcc',
      borderMuted: '#e2e8f0',
    } as ColorScheme,
  },
  vibrant: {
    name: 'Vibrante',
    description: 'Colores energéticos y modernos',
    colors: {
      primary: '#7c3aed',
      primaryLight: '#ede9fe',
      secondary: '#06b6d4',
      accent: '#ec4899',
      background: '#ffffff',
      surface: '#faf5ff',
      sidebarBg: '#f3e8ff',
      sidebarBorder: '#ede9fe',
      sidebarText: '#7c3aed',
      footerBg: '#faf5ff',
      footerText: '#7c3aed',
      footerBorder: '#ede9fe',
      textMuted: '#7c3aedcc',
      borderMuted: '#ede9fe',
    } as ColorScheme,
  },
} as const;

export type ColorThemeName = keyof typeof colorThemes;
