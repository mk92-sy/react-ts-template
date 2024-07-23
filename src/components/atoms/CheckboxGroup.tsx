import css from "./Checkbox.module.css";

import { HTMLAttributes } from "react";

interface CheckboxGroupProps extends HTMLAttributes<HTMLDivElement> {
  direction?: "row" | "column";
  gap?: number;
}

const CheckboxGroup = ({
  direction = "row",
  gap,
  className,
  children,
  style,
  ...rest
}: CheckboxGroupProps) => {
  return (
    <div
      {...rest}
      className={`${css.group} ${css[direction]} ${className || ""}`}
      style={{ gap, ...style }}
    >
      {children}
    </div>
  );
};

export default CheckboxGroup;
