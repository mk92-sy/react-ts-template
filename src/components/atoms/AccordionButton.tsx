// AccordionButton.tsx
import React, { ButtonHTMLAttributes, useRef } from "react";
import css from "./Accordion.module.scss";
import Icon from "./Icon";
import { useAccordion } from "../../context/AccordionContext";

interface AccordionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen?: boolean;
  openIcon?: "plus" | "dash" | "spinner";
  closeIcon?: "plus" | "dash" | "spinner";
  children: React.ReactNode;
  toggleItem?: () => void;
}

export const AccordionButton: React.FC<AccordionButtonProps> = ({
  isOpen,
  openIcon,
  closeIcon,
  children,
  toggleItem,
}) => {
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

export default AccordionButton;
