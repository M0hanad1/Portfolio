import { useState } from "react";
import { Theme } from "types";

export default function useTheme() {
  const [theme, setTheme] = useState<Theme>(getTheme);

  function getTheme(): Theme {
    if (!localStorage.theme) {
      return updateDoc({ themeName: "system", isDark: false });
    }
    return updateDoc(JSON.parse(localStorage.theme));
  }

  function updateDoc({ themeName, isDark }: Theme): Theme {
    if (themeName === "system") {
      isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else document.documentElement.classList.remove("dark");
    localStorage.theme = JSON.stringify({ themeName, isDark });
    return { themeName, isDark };
  }

  function updateTheme(theme: Theme) {
    setTheme(updateDoc(theme));
  }

  return { theme, updateTheme };
}
