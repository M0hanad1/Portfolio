import { ReactNode, useState } from "react";
import { sectionContext } from "./sectionContext";
import { sections } from "types";

interface ContextProviderProps {
  children: ReactNode;
}

export default function ContextProvider({ children }: ContextProviderProps) {
  const [section, setSection] = useState<sections>("home");
  return (
    <sectionContext.Provider value={{ section, setSection }}>
      {children}
    </sectionContext.Provider>
  );
}
