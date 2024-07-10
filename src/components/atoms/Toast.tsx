import css from "./Toast.module.scss";
import { HTMLAttributes, useEffect } from "react";

interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  setIsOpen: any;
  timer: number;
  // 필수 prop인 경우 Required<type>['속성명']
  // children: Required<ButtonHTMLAttributes<HTMLButtonElement>>["children"];
}

const Toast = ({
  isOpen = false,
  setIsOpen,
  timer = 3000,
  children,
  ...rest
}: ToastProps) => {
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setIsOpen(false);
      }, timer);
    }
  }, [isOpen]);
  return (
    <div className={`${css.toast} ${isOpen ? css.show : css.hide} `} {...rest}>
      {children}
    </div>
  );
};

export default Toast;
