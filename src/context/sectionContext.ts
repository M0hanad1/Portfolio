import { Dispatch, SetStateAction, createContext } from "react";
import { Sections } from "types";

interface SectionContext {
  section: Sections;
  setSection: Dispatch<SetStateAction<Sections>>;
}

export const sectionContext = createContext<SectionContext>(
  {} as SectionContext,
);
