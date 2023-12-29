import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { themeContext } from "context/themeContext";
import { useContext } from "react";
import { ThemeItem } from "types";

export default function ThemeChoice({ themeName, isDark, icon }: ThemeItem) {
  const { theme, updateTheme } = useContext(themeContext);

  return (
    <li className="w-full">
      <button
        className={`flex w-full items-center gap-2 px-2 py-3 text-2xl font-bold capitalize transition-colors ${
          theme.themeName === themeName
            ? "bg-slate-200 text-cyan-400 dark:bg-gray-950/90"
            : "hover:bg-slate-100 hover:dark:bg-gray-950/40"
        }`}
        onClick={() =>
          updateTheme({
            themeName: themeName,
            isDark: isDark,
          })
        }
      >
        <FontAwesomeIcon icon={icon} /> {themeName}
      </button>
    </li>
  );
}
