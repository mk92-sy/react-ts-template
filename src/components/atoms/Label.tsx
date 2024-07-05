import css from "./Label.module.scss";
import { LabelHTMLAttributes, useEffect, useRef, useState } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  // 필수 prop인 경우 Required<type>['속성명']
  // children: Required<ButtonHTMLAttributes<HTMLButtonElement>>["children"];
}

const Label = ({ onChange, children, className, ...rest }: LabelProps) => {
  const containerRef = useRef<HTMLLabelElement | null>(null);
  const [isActive, setIsActive] = useState<boolean>(false);
  useEffect(() => {
    const checkActiveElement = (): void => {
      if (containerRef.current) {
        const isActiveElementInside: boolean = containerRef.current.contains(
          document.activeElement
        );
        setIsActive(isActiveElementInside);
      }
    };

    const handleBlur = (): void => {
      // setTimeout을 사용하여 다음 tick에서 확인
      setTimeout(() => {
        if (
          containerRef.current &&
          !containerRef.current.contains(document.activeElement)
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
  }, []);
  return (
    <div className={`${css.wrapper} ${isActive ? css.active : ""}`}>
      <label
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
