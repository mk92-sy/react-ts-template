import React from "react";
import { useTabContext } from "./TabContext";

interface TabProps<T> {
  label: string;
  value: T;
}

export function Tab<T>({ label, value }: TabProps<T>) {
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
}
