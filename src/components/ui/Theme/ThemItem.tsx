import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { themeContext } from "context/themeContext";
import { useContext } from "react";
import { Theme } from "types";

interface ThemeItemProps extends Theme {
  icon: IconDefinition;
}

export default function ThemeItem({
  currentTheme,
  isDark,
  icon,
}: ThemeItemProps) {
  const { theme, updateTheme } = useContext(themeContext);

  return (
    <li className="w-full">
      <button
        className={`flex w-full items-center gap-2 px-2 py-3 text-2xl font-bold capitalize transition-colors ${
          theme.currentTheme === currentTheme
            ? "bg-gray-950/90 text-cyan-500"
            : "hover:bg-gray-950/40"
        }`}
        onClick={() =>
          updateTheme({
            currentTheme: currentTheme,
            isDark: isDark,
          })
        }
      >
        <FontAwesomeIcon icon={icon} /> {currentTheme}
      </button>
    </li>
  );
}
