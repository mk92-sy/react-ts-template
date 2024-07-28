import React, { useRef, useEffect, ReactNode } from "react";
import { useTabContext } from "./TabContext";

interface TabListProps {
  children: ReactNode;
}

export function TabList({ children }: TabListProps) {
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
