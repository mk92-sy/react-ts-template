import { createContext, useState, useContext } from "react";
import * as TYPES from "types";

const AccordionContext = createContext<TYPES.AccordionContextType | undefined>(
  undefined
);

const AccordionProvider = ({
  children,
  type,
}: TYPES.AccordionProviderProps) => {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

  const value = {
    activeIndexes,
    setActiveIndexes,
    type,
  };

  return (
    <AccordionContext.Provider value={value}>
      {children}
    </AccordionContext.Provider>
  );
};

export const useAccordion = (): TYPES.AccordionContextType => {
  const context = useContext(AccordionContext);
  if (context === undefined) {
    throw new Error("useAccordion must be used within an AccordionProvider");
  }
  return context;
};

export const Accordion = ({
  children,
  type = "single",
}: TYPES.AccordionProps) => {
  return <AccordionProvider type={type}>{children}</AccordionProvider>;
};
