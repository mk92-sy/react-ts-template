import React, { InputHTMLAttributes } from "react";
import css from "./Sample.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  // 추가적인 커스텀 props가 필요하다면 여기에 정의
  // propsName: data type (ex. string, number, boolean...)
}

const SampleInput: React.FC<InputProps> = ({ className, ...rest }) => {
  return <input className={`${css.input} ${className || ""}`} {...rest} />;
};

export default SampleInput;
