export type ThemeNames = "system" | "dark" | "light";

export interface Theme {
  currentTheme: ThemeNames;
  isDark: boolean;
}

export type Sections = "home" | "skills" | "projects" | "contact";
