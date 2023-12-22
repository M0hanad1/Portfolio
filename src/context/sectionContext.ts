import { Dispatch, SetStateAction, createContext } from "react";

export type sections = "home" | "skills" | "projects" | "contact";

interface SectionContext {
  section: sections;
  setSection: Dispatch<SetStateAction<sections>>;
}

export const sectionContext = createContext<SectionContext>(
  {} as SectionContext,
);
