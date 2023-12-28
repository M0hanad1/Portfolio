import { faMoon, faSun, faTv } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { themeContext } from "context/themeContext";
import { useClickShow } from "hooks";
import { useContext, useRef } from "react";
import { ThemeNames } from "types";
import ThemeItem from "./ThemItem";

const themeIcons = {
  system: faTv,
  light: faSun,
  dark: faMoon,
};

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
          <ThemeItem
            key={value[0]}
            currentTheme={value[0] as ThemeNames}
            isDark={value[0] === "dark"}
            icon={value[1]}
          />
        ))}
      </ul>
    </div>
  );
}
