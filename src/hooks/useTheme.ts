import { useState } from "react";
import { Theme } from "types";

export default function useTheme() {
  const [theme, setTheme] = useState<Theme>(getTheme);

  function getTheme(): Theme {
    if (!localStorage.theme) {
      return updateDoc({ currentTheme: "system", isDark: true });
    }
    return updateDoc(JSON.parse(localStorage.theme));
  }

  function updateDoc({ currentTheme, isDark }: Theme): Theme {
    if (currentTheme === "system") {
      isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else document.documentElement.classList.remove("dark");
    localStorage.theme = JSON.stringify({ currentTheme, isDark });
    return { currentTheme, isDark };
  }

  function updateTheme(theme: Theme) {
    setTheme(updateDoc(theme));
  }

  return { theme, updateTheme };
}
