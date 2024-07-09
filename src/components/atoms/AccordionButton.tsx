// AccordionButton.tsx
import React, { useRef } from "react";
import css from "./Accordion.module.scss";
import Icon from "./Icon";

interface AccordionButtonProps {
  isOpen?: boolean;
  openIcon?: string;
  closeIcon?: string;
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
    <button className={css.button} onClick={toggleItem} ref={buttonRef}>
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
