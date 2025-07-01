import css from "./Toast.module.scss";
import { useEffect } from "react";
import * as TYPES from "types";

const Toast = ({
  isOpen = false,
  setIsOpen,
  timer = 3000,
  children,
  ...rest
}: TYPES.ToastProps) => {
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setIsOpen(false);
      }, timer);
    }
    // eslint-disable-next-line
  }, [isOpen]);
  return (
    <div className={`${css.toast} ${isOpen ? css.show : css.hide} `} {...rest}>
      {children}
    </div>
  );
};

export default Toast;
