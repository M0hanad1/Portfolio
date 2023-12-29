import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { themeContext } from "context/themeContext";
import { useClickShow } from "hooks";
import { useContext, useRef } from "react";
import ThemeChoice from "./ThemeChoice";
import themeIcons from "content/themeIcons";

export default function Theme() {
  const { theme } = useContext(themeContext);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const active = useClickShow(buttonRef);

  return (
    <div
      className={`fixed right-3 top-2 flex flex-col items-end transition-[gap] sm:bottom-2 sm:flex-col-reverse ${
        active ? "gap-1.5" : "gap-0.5"
      }`}
    >
      <button
        className={`h-14 w-14 rounded-full bg-slate-300 opacity-70 transition dark:bg-gray-950/70 ${
          active ? "text-cyan-400 !opacity-100" : "hover:opacity-100"
        } `}
        ref={buttonRef}
      >
        <FontAwesomeIcon
          icon={themeIcons.find(({ isDark }) => isDark === theme.isDark)!.icon}
          size="xl"
        />
      </button>
      <ul
        className={`flex w-44 flex-col items-start divide-y divide-slate-200 overflow-hidden rounded bg-slate-50 transition-all dark:divide-gray-950/50 dark:bg-gray-950/70 ${
          active ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {themeIcons.map((value) => (
          <ThemeChoice {...value} key={value.themeName} />
        ))}
      </ul>
    </div>
  );
}
