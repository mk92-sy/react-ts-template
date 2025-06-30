import { createContext, useContext, ReactNode } from "react";

interface TabContextType<T> {
  activeTab: T;
  setActiveTab: (value: T) => void;
}

const TabContext = createContext<TabContextType<any> | undefined>(undefined);

interface TabProviderProps<T> {
  children: ReactNode;
  value: T;
  onChange: (value: T) => void;
}

export function TabProvider<T>({
  children,
  value,
  onChange,
}: TabProviderProps<T>) {
  return (
    <TabContext.Provider value={{ activeTab: value, setActiveTab: onChange }}>
      {children}
    </TabContext.Provider>
  );
}

export const useTabContext = () => {
  const context = useContext(TabContext);
  if (context === undefined) {
    throw new Error("useTabContext must be used within a TabProvider");
  }
  return context;
};
