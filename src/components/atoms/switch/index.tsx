import { useDarkMode } from "context/DarakModeContext";
import css from "./Switch.module.scss";

import * as TYPES from "types";

const Switch = ({ className, ...rest }: TYPES.SwitchProps) => {
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
