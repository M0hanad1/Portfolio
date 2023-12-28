import { Dispatch, SetStateAction, createContext } from "react";
import { sections } from "types";

interface SectionContext {
  section: sections;
  setSection: Dispatch<SetStateAction<sections>>;
}

export const sectionContext = createContext<SectionContext>(
  {} as SectionContext,
);
