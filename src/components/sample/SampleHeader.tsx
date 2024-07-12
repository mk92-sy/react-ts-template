import React, { HTMLAttributes } from "react";
import css from "./Sample.module.scss";

interface HeaderProps extends HTMLAttributes<HTMLElement> {
  // 추가적인 커스텀 props가 필요하다면 여기에 정의
  // propsName: data type (ex. string, number, boolean...)
}

const Header: React.FC<HeaderProps> = ({ className, children, ...props }) => {
  return (
    <header className={`${css.header} ${className || ""}`} {...props}>
      {children}
    </header>
  );
};

export default Header;
