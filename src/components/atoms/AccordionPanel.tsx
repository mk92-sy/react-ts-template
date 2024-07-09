// AccordionPanel.tsx
import css from "./Accordion.module.scss";
import React, { useEffect, useRef, useState } from "react";

interface AccordionPanelProps {
  className?: string;
  children: React.ReactNode;
  isOpen?: boolean;
}

export const AccordionPanel: React.FC<AccordionPanelProps> = ({
  className,
  children,
  isOpen,
}) => {
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

      console.log("containerRef.current : ", containerRef.current);
      console.log("heightSum : ", heightSum);
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

  useEffect(() => {
    if (isOpen && containerRef.current) {
      calculateHeight();
    }
  }, [isOpen]);

  return (
    <div
      role="region"
      className={`${css.contents} ${className || ""}`}
      ref={containerRef}
    >
      {children}
    </div>
  );
};
