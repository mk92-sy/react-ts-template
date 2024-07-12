import React, { LabelHTMLAttributes } from "react";
import css from "./Sample.module.scss";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  // 추가적인 커스텀 props가 필요하다면 여기에 정의
  // propsName: data type (ex. string, number, boolean...)
}

const SampleLabel: React.FC<LabelProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <label className={`${css.label} ${className || ""}`} {...props}>
      {children}
    </label>
  );
};

export default SampleLabel;
