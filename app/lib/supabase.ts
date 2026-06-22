import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type ColorTheme = {
  id: string;
  name: string;
  description: string;
  colors: Record<string, string>;
  gradient_color_1: string;
  gradient_color_2: string;
  gradient_color_3: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
};

export async function getColorThemes() {
  const { data, error } = await supabase
    .from('color_themes')
    .select('*')
    .order('name');

  if (error) {
    console.error('Error fetching color themes:', error);
    return [];
  }

  return data as ColorTheme[];
}

export async function getActiveTheme() {
  const { data, error } = await supabase
    .from('color_themes')
    .select('*')
    .eq('is_active', true)
    .single();

  if (error) {
    console.error('Error fetching active theme:', error);
    return null;
  }

  return data as ColorTheme;
}

export async function setActiveTheme(themeName: string) {
  // Primero desactivar todos
  await supabase
    .from('color_themes')
    .update({ is_active: false })
    .neq('name', themeName);

  // Luego activar el nuevo
  const { data, error } = await supabase
    .from('color_themes')
    .update({ is_active: true })
    .eq('name', themeName)
    .select()
    .single();

  if (error) {
    console.error('Error setting active theme:', error);
    return null;
  }

  return data as ColorTheme;
}
