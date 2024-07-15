import { useDarkMode } from "context/DarakModeContext";
import css from "./Switch.module.scss";

import { InputHTMLAttributes } from "react";

interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  // 필수 prop인 경우 Required<type>['속성명']
  // children: Required<ButtonHTMLAttributes<HTMLButtonElement>>["children"];
}

const Switch = ({ className, ...rest }: SwitchProps) => {
  const { darkMode } = useDarkMode();
  return (
    <input
      type="checkbox"
      role="switch"
      {...rest}
      className={`${css.switch} ${darkMode ? css.dark : ""} ${className || ""}`}
    />
  );
};

export default Switch;
