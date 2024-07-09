import css from "./Accordion.module.scss";
import { HTMLAttributes, useEffect, useRef, useState } from "react";

interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  // 필수 prop인 경우 Required<type>['속성명']
  // children: Required<ButtonHTMLAttributes<HTMLButtonElement>>["children"];
}

const AccordionContents = ({
  isOpen = false,
  children,
  className,
  ...rest
}: AccordionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [totalHeight, setTotalHeight] = useState(0);

  const calculateHeight = () => {
    if (containerRef.current) {
      const children = containerRef.current.children;
      let heightSum = 0;
      for (let i = 0; i < children.length; i++) {
        heightSum += (children[i] as HTMLElement).offsetHeight;
      }
      setTotalHeight(heightSum);
    }
  };

  useEffect(() => {
    // 초기 계산
    calculateHeight();

    // resize 이벤트 리스너 추가
    window.addEventListener("resize", calculateHeight);

    // 컴포넌트 언마운트 시 리스너 제거
    return () => {
      window.removeEventListener("resize", calculateHeight);
    };
  }, []);

  return (
    <div
      role="region"
      className={`${css.contents} ${className || ""}`}
      style={{ height: isOpen ? totalHeight : 0 }}
      {...rest}
      ref={containerRef}
    >
      {children}
    </div>
  );
};

export default AccordionContents;
