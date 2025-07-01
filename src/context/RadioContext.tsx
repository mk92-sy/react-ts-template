import { createContext } from "react";
import * as TYPES from "types";

export const RadioGroupContext = createContext<
  TYPES.RadioGroupContextType | undefined
>(undefined);
