import { TabProvider, useTabContext } from "context/TabContext";
import React, { useEffect, useRef } from "react";

import * as TYPES from "types";

export const Tab = ({ label, value }: TYPES.TabProps) => {
  const { activeTab, setActiveTab } = useTabContext();

  const handleClick = () => {
    setActiveTab(value);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      setActiveTab(value);
    }
  };

  return (
    <button
      role="tab"
      aria-selected={activeTab === value}
      tabIndex={activeTab === value ? 0 : -1}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      style={{
        padding: "10px 20px",
        border: "none",
        background: "none",
        cursor: "pointer",
        borderBottom: activeTab === value ? "2px solid blue" : "none",
        fontWeight: activeTab === value ? "bold" : "normal",
      }}
    >
      {label}
    </button>
  );
};

export function TabList({ children }: TYPES.TabListProps) {
  const { activeTab } = useTabContext();
  const tabListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tabListRef.current) {
      const activeTabElement = Array.from(tabListRef.current.children).find(
        (child) =>
          (child as HTMLElement).getAttribute("aria-selected") === "true"
      ) as HTMLElement;

      if (activeTabElement) {
        const tabListRect = tabListRef.current.getBoundingClientRect();
        const activeTabRect = activeTabElement.getBoundingClientRect();

        if (activeTabRect.left < tabListRect.left) {
          tabListRef.current.scrollLeft -=
            tabListRect.left - activeTabRect.left + 20;
        } else if (activeTabRect.right > tabListRect.right) {
          tabListRef.current.scrollLeft +=
            activeTabRect.right - tabListRect.right + 20;
        }
      }
    }
  }, [activeTab]);

  return (
    <div
      ref={tabListRef}
      role="tablist"
      style={{
        display: "flex",
        overflowX: "auto",
        scrollBehavior: "smooth",
      }}
    >
      {children}
    </div>
  );
}

export function TabPanel<T>({ children, value }: TYPES.TabPanelProps<T>) {
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

export function Tabs<T>({ children, value, onChange }: TYPES.TabsProps<T>) {
  return (
    <TabProvider value={value} onChange={onChange}>
      {children}
    </TabProvider>
  );
}
