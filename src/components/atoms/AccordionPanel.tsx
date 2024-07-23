// AccordionPanel.tsx
import css from "./Accordion.module.scss";
import React, { useEffect, useRef, useState, HTMLAttributes } from "react";

interface AccordionPanelProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  children: React.ReactNode;
  isOpen?: boolean;
}

export const AccordionPanel = ({
  className,
  children,
  isOpen,
}: AccordionPanelProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [totalHeight, setTotalHeight] = useState<any>(0);

  const calculateHeight = () => {
    if (containerRef.current && isOpen) {
      setTotalHeight(containerRef.current.scrollHeight);
    }
  };

  useEffect(() => {
    // resize 이벤트 리스너 추가
    window.addEventListener("resize", calculateHeight);

    // 컴포넌트 언마운트 시 리스너 제거
    return () => {
      window.removeEventListener("resize", calculateHeight);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      calculateHeight();
      setTimeout(() => {
        setTotalHeight("auto");
      }, 300);
    } else {
      if (totalHeight) {
        setTotalHeight(containerRef.current?.scrollHeight);
        setTimeout(() => {
          setTotalHeight(0);
        }, 100);
      }
    }
  }, [isOpen]);

  return (
    <div
      role="region"
      className={`${css.panel} ${className || ""}`}
      aria-hidden={!isOpen}
      ref={containerRef}
      style={{
        height: totalHeight,
        minHeight: 0,
      }}
    >
      {children}
    </div>
  );
};
export default AccordionPanel;
