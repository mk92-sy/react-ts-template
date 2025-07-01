import { createContext, useContext } from "react";
import * as TYPES from "types";

export const SelectContext = createContext<TYPES.SelectContextType | undefined>(
  undefined
);

export const useSelectContext = () => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error("useSelectContext must be used within a SelectProvider");
  }
  return context;
};
