export const TOKEN = 'ADOLAT_MARKAZI_TOKEN';
export const PROFILE = 'ADOLAT_MARKAZI_PROFILE';
export const LANGUAGE = 'ADOLAT_MARKAZI_LANGUAGE';
export const THEME_COLOR = 'FIN_THEME_COLOR';

export const token = localStorage.getItem(TOKEN);
export const profile = localStorage.getItem(PROFILE);
export const language = localStorage.getItem(LANGUAGE);
export const isDarkTheme = localStorage.getItem(THEME_COLOR) === 'dark';
