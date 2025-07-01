import css from "./Input.module.scss";
import { InputHTMLAttributes, ChangeEvent, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
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
