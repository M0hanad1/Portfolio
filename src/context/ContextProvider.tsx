import { ReactNode, useState } from "react";
import { sectionContext } from "./sectionContext";
import { themeContext } from "./themeContext";
import { Sections } from "types";
import { useTheme } from "hooks";

interface ContextProviderProps {
  children: ReactNode;
}

export default function ContextProvider({ children }: ContextProviderProps) {
  const [section, setSection] = useState<Sections>("home");
  const { theme, updateTheme } = useTheme();

  return (
    <themeContext.Provider value={{ theme, updateTheme }}>
      <sectionContext.Provider value={{ section, setSection }}>
        {children}
      </sectionContext.Provider>
    </themeContext.Provider>
  );
}
