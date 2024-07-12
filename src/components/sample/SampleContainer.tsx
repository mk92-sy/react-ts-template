import React, { HTMLAttributes } from "react";
import css from "./Sample.module.scss";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  // 추가적인 커스텀 props가 필요하다면 여기에 정의
  // propsName: data type (ex. string, number, boolean...)
}

const SampleContainer: React.FC<ContainerProps> = ({
  className,
  style,
  ...rest
}) => {
  return (
    <div
      className={`${css.container} ${className || ""}`}
      style={{ ...style }}
      {...rest}
    />
  );
};

export default SampleContainer;
