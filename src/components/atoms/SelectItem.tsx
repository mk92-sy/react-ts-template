import React from "react";
import styles from "./Select.module.scss";
import { useSelectContext } from "context/SelectContext";

interface ItemProps {
  value: string;
  children: React.ReactNode;
  index: number;
}

function SelectItem({ value, children, index }: ItemProps) {
  const { selectedValue, onChange, focusedIndex, setFocusedIndex } =
    useSelectContext();

  return (
    <div
      role="option"
      aria-selected={selectedValue === value}
      onClick={() => onChange(value)}
      onMouseEnter={() => setFocusedIndex(index)}
      tabIndex={-1}
      className={`${styles.item} ${selectedValue === value ? styles.selected : ""} ${focusedIndex === index ? styles.focused : ""}`}
    >
      {children}
    </div>
  );
}

export default SelectItem;
