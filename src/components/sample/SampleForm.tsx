import React, { FormHTMLAttributes } from "react";
import css from "./Sample.module.scss";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  // 추가적인 커스텀 props가 필요하다면 여기에 정의
  // propsName: data type (ex. string, number, boolean...)
}

const SampleForm: React.FC<FormProps> = ({ className, children, ...props }) => {
  return (
    <form className={`${css.form} ${className || ""}`} {...props}>
      {children}
    </form>
  );
};

export default SampleForm;
