import React, { useState, useRef, useEffect, ReactNode } from "react";
import styles from "./Select.module.scss";
import { SelectContext } from "context/SelectContext";

interface SelectProps {
  children: ReactNode;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

function Select({ children, placeholder, value, onChange }: SelectProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleChange = (value: string) => {
    onChange(value);
    setIsOpen(false);
    setFocusedIndex(-1);
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setFocusedIndex(0);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setFocusedIndex((prevIndex) =>
          Math.min(prevIndex + 1, React.Children.count(children) - 1)
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setFocusedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        break;
      case "Enter":
        e.preventDefault();
        if (isOpen && focusedIndex >= 0) {
          const childArray = React.Children.toArray(children);
          const selectedChild = childArray[focusedIndex] as React.ReactElement;
          if (selectedChild && selectedChild.props.value) {
            handleChange(selectedChild.props.value);
          }
        } else {
          toggleOpen();
        }
        break;
      case "Escape":
        e.preventDefault();
        setIsOpen(false);
        setFocusedIndex(-1);
        break;
    }
  };

  useEffect(() => {
    if (!isOpen) {
      setFocusedIndex(-1);
    }
  }, [isOpen]);

  // 외부 클릭 감지를 위한 useEffect 추가
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <SelectContext.Provider
      value={{
        selectedValue: value,
        onChange: handleChange,
        placeholder,
        focusedIndex,
        setFocusedIndex,
      }}
    >
      <div className={styles.select} ref={containerRef}>
        <div
          role="combobox"
          aria-labelledby="select-label"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          tabIndex={0}
          className={styles.combobox}
          onClick={toggleOpen}
          onKeyDown={handleKeyDown}
        >
          {value || <span className={styles.placeholder}>{placeholder}</span>}
        </div>
        {isOpen && (
          <div role="listbox" className={styles.list}>
            {children}
          </div>
        )}
      </div>
    </SelectContext.Provider>
  );
}

export default Select;
