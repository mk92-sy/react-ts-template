import css from "./Label.module.scss";
import { useEffect, useRef, useState } from "react";
import * as TYPES from "types";

const Label = ({
  line = false,
  onChange,
  children,
  className,
  htmlFor,
  ...rest
}: TYPES.LabelProps) => {
  const containerRef = useRef<HTMLLabelElement | null>(null);
  const [isActive, setIsActive] = useState<boolean>(false);
  useEffect(() => {
    const checkActiveElement = (): void => {
      if (
        htmlFor &&
        document.activeElement === document.getElementById(htmlFor)
      ) {
        setIsActive(true);
      }
    };

    const handleBlur = (): void => {
      // setTimeout을 사용하여 다음 tick에서 확인
      setTimeout(() => {
        if (
          htmlFor &&
          document.activeElement !== document.getElementById(htmlFor)
        ) {
          setIsActive(false);
        }
      }, 0);
    };

    // 초기확인
    checkActiveElement();

    // focus 이벤트 리스너 추가
    document.addEventListener("focus", checkActiveElement, true);
    document.addEventListener("blur", handleBlur, true);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      document.removeEventListener("focus", checkActiveElement, true);
      document.removeEventListener("blur", handleBlur, true);
    };
    // eslint-disable-next-line
  }, []);
  return (
    <div
      className={`${css.wrapper} ${line ? css.line : ""} ${
        isActive ? css.active : ""
      }`}
    >
      <label
        htmlFor={htmlFor}
        className={`${css.label} ${className || ""}`}
        ref={containerRef}
        {...rest}
      >
        {children}
      </label>
    </div>
  );
};

export default Label;
