// React 타입 적용을 위해 일부 인터페이스 import
import React, { ButtonHTMLAttributes } from "react";
// 스타일 적용을 위한 css import
import css from "./Sample.module.scss";

// 타입을 모아놓은 것을 interface 라고 하며 ButtonProps는 interface의 이름, extends 는 확장의 개념.
// ButtonHTMLAttributes는 html 버튼 태그에 사용 가능한 속성들을 모아놓은 것. 꺾쇠 안에 있는 ButtonElement는 이 컴포넌트는 버튼 태그임을 리액트에게 미리 알려주는 용도
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // 추가적인 커스텀 props가 필요하다면 여기에 정의
  // propsName: data type (ex. string, number, boolean...)
}

// SampleButton은 ButtonProps를 포함한 React의 FC(Fuctional Componet)입니다.
const SampleButton: React.FC<ButtonProps> = ({
  className,
  // children은 컴포넌트 사이에 들어가는 컨텐츠 영역이라고 보면됩니다.
  children,
  // ...rest 는 나머지 즉 여기에서 정의하지 않은 모든 것들을 포함합니다.
  // ...rest를 사용했기 때문에 여기 props에서 onClick을 정의하지 않아도 외부에서 사용 가능합니다.
  // ...는 전개 구문 (Spread Syntax)으로
  ...rest
}) => {
  return (
    <button className={`${css.button} ${className || ""}`} {...rest}>
      {children}
    </button>
  );
};

// 외부에서 import 하여 사용할 때 SampleButton란 이름으로 사용하겠습니다.
export default SampleButton;
