import { createContext } from "react";

interface RadioGroupContextType {
  name: string;
  selectedValue: string;
  onChange: (value: string) => void;
}

export const RadioGroupContext = createContext<
  RadioGroupContextType | undefined
>(undefined);
