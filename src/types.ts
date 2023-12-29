import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export type Sections = "home" | "skills" | "projects" | "contact";

export type ThemeNames = "system" | "dark" | "light";

export interface Theme {
  themeName: ThemeNames;
  isDark: boolean;
}

export interface ThemeItem extends Theme {
  icon: IconDefinition;
}

export interface NavItem {
  name: Sections;
  link: string;
  icon: IconDefinition;
}
