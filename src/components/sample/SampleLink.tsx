import React, { AnchorHTMLAttributes } from "react";
import css from "./Sample.module.scss";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  // 추가적인 커스텀 props가 필요하다면 여기에 정의
  // propsName: data type (ex. string, number, boolean...)
}

const SampleLink: React.FC<LinkProps> = ({ className, children, ...rest }) => {
  return (
    <a className={`${css.link} ${className || ""}`} {...rest}>
      {children}
    </a>
  );
};

export default SampleLink;
