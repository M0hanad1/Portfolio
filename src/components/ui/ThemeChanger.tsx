import { faMoon, faSun, faTv } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useClick, useTheme } from "hooks";
import { useRef } from "react";
import { Theme } from "types";

const themeIcons = {
  system: faTv,
  light: faSun,
  dark: faMoon,
};

export default function ThemeChanger() {
  const { theme, updateTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const active = useClick(buttonRef);

  return (
    <div className="fixed bottom-2 right-3 flex flex-col-reverse items-end justify-center">
      <button
        className={`h-14 w-14 rounded-full transition-colors ${
          active
            ? "bg-gray-950/70 text-cyan-500"
            : "bg-gray-950/50 hover:bg-gray-950/70"
        } `}
        ref={buttonRef}
      >
        <FontAwesomeIcon
          icon={themeIcons[theme.isDark ? "dark" : "light"]}
          size="xl"
        />
      </button>
      <ul
        className={`flex w-44 flex-col items-start divide-y divide-gray-950/50 overflow-hidden rounded bg-gray-950/70 transition-all ${
          active ? "visible mb-1.5 opacity-100" : "invisible mb-0.5 opacity-0"
        }`}
      >
        {Object.entries(themeIcons).map((value) => (
          <li key={value[0]} className="w-full">
            <button
              className={`flex w-full items-center gap-2 px-2 py-3 text-2xl font-bold capitalize transition-colors ${
                theme.currentTheme === value[0]
                  ? "bg-gray-950/90 text-cyan-500"
                  : "hover:bg-gray-950/40"
              }`}
              onClick={() =>
                updateTheme({
                  currentTheme: value[0],
                  isDark: value[0] === "dark",
                } as Theme)
              }
            >
              <FontAwesomeIcon icon={value[1]} /> {value[0]}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
