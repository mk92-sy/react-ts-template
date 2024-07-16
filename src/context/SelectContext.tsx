import React, { createContext, useContext } from "react";

export interface SelectContextType {
  selectedValue: string;
  onChange: (value: string) => void;
  placeholder?: string;
  focusedIndex: number;
  setFocusedIndex: (index: number) => void;
}

export const SelectContext = createContext<SelectContextType | undefined>(
  undefined
);

export const useSelectContext = () => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error("useSelectContext must be used within a SelectProvider");
  }
  return context;
};
