import { useDarkMode } from "context/DarakModeContext";
import css from "./Button.module.scss";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
}

const Button = ({ size = "md", children, className, ...rest }: ButtonProps) => {
  const { darkMode } = useDarkMode();
  return (
    <button
      className={`${css.btn} ${css[size]} ${darkMode ? css.dark : ""} ${className || ""}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
