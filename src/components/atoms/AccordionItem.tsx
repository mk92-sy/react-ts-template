import React from "react";
import { useAccordion } from "../../context/AccordionContext";
import css from "./Accordion.module.css";

interface AccordionItemProps {
  children: React.ReactNode;
  index: number;
}

export const AccordionItem = ({ children, index }: AccordionItemProps) => {
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

export default AccordionItem;
