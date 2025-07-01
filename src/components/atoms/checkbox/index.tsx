import css from "./Checkbox.module.scss";

import * as TYPES from "types";

export const Checkbox = ({ className, ...rest }: TYPES.CheckboxProps) => {
  return (
    <input
      type="checkbox"
      {...rest}
      className={`${css.checkbox} ${className || ""}`}
    />
  );
};

export const CheckboxGroup = ({
  direction = "row",
  gap,
  className,
  children,
  style,
  ...rest
}: TYPES.CheckboxGroupProps) => {
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
