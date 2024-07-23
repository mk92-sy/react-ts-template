import React, { createContext, useState, useContext } from "react";

interface AccordionContextType {
  activeIndexes: number[];
  setActiveIndexes: React.Dispatch<React.SetStateAction<number[]>>;
  type: "single" | "multiple";
}

const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined
);

interface AccordionProviderProps {
  children: React.ReactNode;
  type: "single" | "multiple";
}

export const AccordionProvider = ({
  children,
  type,
}: AccordionProviderProps) => {
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

export const useAccordion = (): AccordionContextType => {
  const context = useContext(AccordionContext);
  if (context === undefined) {
    throw new Error("useAccordion must be used within an AccordionProvider");
  }
  return context;
};
