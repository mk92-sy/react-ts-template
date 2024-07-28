import React from "react";
import { useTabContext } from "./TabContext";

interface TabPanelProps<T> {
  children: React.ReactNode;
  value: T;
}

export function TabPanel<T>({ children, value }: TabPanelProps<T>) {
  const { activeTab } = useTabContext();

  if (activeTab !== value) {
    return null;
  }

  return (
    <div role="tabpanel" tabIndex={0}>
      {children}
    </div>
  );
}
