import { useDarkMode } from "context/DarakModeContext";
import css from "./Button.module.scss";

import * as TYPES from "types";

const Button = ({
  size = "md",
  children,
  className,
  ...rest
}: TYPES.ButtonProps) => {
  const { darkMode } = useDarkMode();
  return (
    <button
      className={`${css.btn} ${css[size]} ${darkMode ? css.dark : ""} ${
        className || ""
      }`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
