import css from "./Input.module.scss";
import { forwardRef } from "react";
import * as TYPES from "types";

const Input = forwardRef<HTMLInputElement, TYPES.InputProps>(
  ({ type, onChange, className, ...rest }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        onChange={(e) => onChange(e)}
        className={`${css.input} ${className || ""}`}
        {...rest}
      />
    );
  }
);

export default Input;
