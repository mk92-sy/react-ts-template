import { useAccordion } from "context/AccordionContext";
import React, { useRef, useEffect, useState, useCallback } from "react";
import Icon from "../icon";
import css from "./Accordion.module.scss";

import * as TYPES from "types";

export const AccordionButton = ({
  isOpen,
  openIcon,
  closeIcon,
  children,
  toggleItem,
}: TYPES.AccordionButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  return (
    <button
      className={css.button}
      aria-expanded={isOpen}
      onClick={toggleItem}
      ref={buttonRef}
    >
      {children}{" "}
      {openIcon && closeIcon ? (
        isOpen ? (
          <Icon type={closeIcon} />
        ) : (
          <Icon type={openIcon} />
        )
      ) : null}
    </button>
  );
};

export const AccordionItem = ({
  children,
  index,
}: TYPES.AccordionItemProps) => {
  const { activeIndexes, setActiveIndexes, type } = useAccordion();
  const isOpen = activeIndexes.includes(index);

  const toggleItem = () => {
    if (type === "single") {
      setActiveIndexes(isOpen ? [] : [index]);
    } else if (type === "multiple") {
      setActiveIndexes((prev) =>
        isOpen ? prev.filter((i) => i !== index) : [...prev, index]
      );
    }
  };

  return (
    <div className={`${css.item} ${isOpen ? "open" : ""}`}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement, {
            isOpen,
            toggleItem,
            index,
          });
        }
        return child;
      })}
    </div>
  );
};

export const AccordionPanel = ({
  className,
  children,
  isOpen,
}: TYPES.AccordionPanelProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [totalHeight, setTotalHeight] = useState<any>(0);

  const calculateHeight = useCallback(() => {
    if (containerRef.current && isOpen) {
      setTotalHeight(containerRef.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", calculateHeight);
    return () => {
      window.removeEventListener("resize", calculateHeight);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      calculateHeight();
      setTimeout(() => {
        setTotalHeight("auto");
      }, 300);
    } else {
      if (totalHeight) {
        setTotalHeight(containerRef.current?.scrollHeight);
        setTimeout(() => {
          setTotalHeight(0);
        }, 100);
      }
    }
  }, [isOpen]);

  return (
    <div
      role="region"
      className={`${css.panel} ${className || ""}`}
      aria-hidden={!isOpen}
      ref={containerRef}
      style={{
        height: totalHeight,
        minHeight: 0,
      }}
    >
      {children}
    </div>
  );
};
