import React from "react";
import styles from "./Title.module.scss";

import * as TYPES from "types";

export default function Title({
  className,
  headingLevel = 1,
  children,
  ...rest
}: TYPES.TitleProps) {
  const Tag = `h${headingLevel}` as keyof JSX.IntrinsicElements;
  return React.createElement(
    Tag,
    {
      className: `${styles[`h${headingLevel}`]} ${className || ""}`,
      ...rest,
    },
    children
  );
}
