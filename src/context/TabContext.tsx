import { createContext, useContext } from "react";
import * as TYPES from "types";

const TabContext = createContext<TYPES.TabContextType<any> | undefined>(
  undefined
);

export const TabProvider = <T,>({
  children,
  value,
  onChange,
}: TYPES.TabProviderProps<T>) => {
  return (
    <TabContext.Provider value={{ activeTab: value, setActiveTab: onChange }}>
      {children}
    </TabContext.Provider>
  );
};

export const useTabContext = () => {
  const context = useContext(TabContext);
  if (context === undefined) {
    throw new Error("useTabContext must be used within a TabProvider");
  }
  return context;
};
