import css from "./Toast.module.scss";
import { useEffect } from "react";
import * as TYPES from "types";

const Toast = ({
  isOpen = false,
  setIsOpen,
  timer = 3000,
  children,
  style,
  pos = 20,
  ...rest
}: TYPES.ToastProps) => {
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setIsOpen(false);
      }, timer);
    }
  }, [isOpen]);
  return (
    <div
      className={`${css.toast}${isOpen ? ` ${css.show}` : ""}`}
      style={{
        transform: `translate(-50%, ${isOpen ? -pos * 0.1 : 5}rem)`,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Toast;
