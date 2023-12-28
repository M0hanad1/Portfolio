import { faMoon, faSun, faTv } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { themeContext } from "context/themeContext";
import { useClickShow } from "hooks";
import { useContext, useRef } from "react";
import ThemeItem from "./ThemItem";

const themeIcons = [
  { themeName: "system", icon: faTv },
  { themeName: "dark", icon: faMoon },
  { themeName: "light", icon: faSun },
] as const;

export default function Theme() {
  const { theme } = useContext(themeContext);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const active = useClickShow(buttonRef);

  return (
    <div className="fixed bottom-2 right-3 flex flex-col-reverse items-end justify-center">
      <button
        className={`h-14 w-14 rounded-full bg-gray-950/70 opacity-70 transition ${
          active ? "text-cyan-500 !opacity-100" : "hover:opacity-100"
        } `}
        ref={buttonRef}
      >
        <FontAwesomeIcon
          icon={themeIcons[theme.isDark ? 1 : 2].icon}
          size="xl"
        />
      </button>
      <ul
        className={`flex w-44 flex-col items-start divide-y divide-gray-950/50 overflow-hidden rounded bg-gray-950/70 transition-all ${
          active ? "visible mb-1.5 opacity-100" : "invisible mb-0.5 opacity-0"
        }`}
      >
        {themeIcons.map((value) => (
          <ThemeItem
            key={value.themeName}
            currentTheme={value.themeName}
            isDark={value.themeName === "dark"}
            icon={value.icon}
          />
        ))}
      </ul>
    </div>
  );
}
