import { AccordionProvider } from "context/AccordionContext";
import React, { HTMLAttributes } from "react";

interface AccordionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  type?: "single" | "multiple";
}

function Accordion({ children, type = "single" }: AccordionProps) {
  return <AccordionProvider type={type}>{children}</AccordionProvider>;
}

export default Accordion;
