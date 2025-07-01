import { SelectContext, useSelectContext } from "context/SelectContext";
import React, { useEffect, useRef, useState } from "react";
import * as TYPES from "types";
import css from "./Select.module.scss";

export const Select = ({
  children,
  placeholder,
  value,
  onChange,
}: TYPES.SelectProps) => {
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
      case "Tab":
        if (isOpen) {
          e.preventDefault();
          setIsOpen(false);
          setFocusedIndex(-1);
          break;
        }
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
      <div className={css.select} ref={containerRef}>
        <div
          role="combobox"
          aria-labelledby="select-label"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          tabIndex={0}
          className={css.combobox}
          onClick={toggleOpen}
          onKeyDown={handleKeyDown}
        >
          {value || <span className={css.placeholder}>{placeholder}</span>}
        </div>
        {isOpen && (
          <div role="listbox" className={css.list}>
            {children}
          </div>
        )}
      </div>
    </SelectContext.Provider>
  );
};

export const SelectItem = ({
  value,
  children,
  index,
}: TYPES.SelectItemProps) => {
  const { selectedValue, onChange, focusedIndex, setFocusedIndex } =
    useSelectContext();

  return (
    <div
      role="option"
      aria-selected={selectedValue === value}
      onClick={() => onChange(value)}
      onMouseEnter={() => setFocusedIndex(index)}
      tabIndex={-1}
      className={`${css.item} ${selectedValue === value ? css.selected : ""} ${
        focusedIndex === index ? css.focused : ""
      }`}
    >
      {children}
    </div>
  );
};
