import { ReactNode, useState } from "react";
import { sectionContext, sections } from "./sectionContext";

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
