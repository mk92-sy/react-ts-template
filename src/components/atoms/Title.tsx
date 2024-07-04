import React, { HTMLAttributes } from "react";
import styles from "./Title.module.scss";

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

export default function Title({ className, headingLevel = 1, children, ...rest }: TitleProps) {
  const Tag = `h${headingLevel}` as keyof JSX.IntrinsicElements;
  return React.createElement(
    Tag,
    { 
      className: `${styles[`h${headingLevel}`]} ${className || ''}`,
      ...rest 
    },
    children
  );
}