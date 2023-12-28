import { createContext } from "react";
import { Theme } from "types";

interface ThemeContext {
  theme: Theme;
  updateTheme: (theme: Theme) => void;
}

export const themeContext = createContext<ThemeContext>({} as ThemeContext);
