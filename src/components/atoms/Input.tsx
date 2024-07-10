import css from "./Input.module.scss";
import { InputHTMLAttributes, ChangeEvent, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  // 필수 prop인 경우 Required<type>['속성명']
  // children: Required<ButtonHTMLAttributes<HTMLButtonElement>>["children"];
}

const Input = ({ onChange, className, ...rest }: InputProps) => {
  return (
    <input
      onChange={(e) => onChange(e)}
      className={`${css.input} ${className || ""}`}
      {...rest}
    />
  );
};

export default Input;
