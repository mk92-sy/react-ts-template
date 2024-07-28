import React from "react";
import { TabProvider } from "./TabContext";

interface TabsProps<T> {
  children: React.ReactNode;
  value: T;
  onChange: (value: T) => void;
}

export function Tabs<T>({ children, value, onChange }: TabsProps<T>) {
  return (
    <TabProvider value={value} onChange={onChange}>
      {children}
    </TabProvider>
  );
}
