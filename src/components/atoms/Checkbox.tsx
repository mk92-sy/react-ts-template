import css from "./Checkbox.module.scss";

import { InputHTMLAttributes } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  // 필수 prop인 경우 Required<type>['속성명']
  // children: Required<ButtonHTMLAttributes<HTMLButtonElement>>["children"];
}

const Checkbox = ({ className, ...rest }: CheckboxProps) => {
  return (
    <input
      type="checkbox"
      {...rest}
      className={`${css.checkbox} ${className || ""}`}
    />
  );
};

export default Checkbox;
