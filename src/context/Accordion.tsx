import React from "react";
import { AccordionProvider } from "./AccordionContext";

interface AccordionProps {
  children: React.ReactNode;
  type?: "single" | "multiple";
}

export const Accordion: React.FC<AccordionProps> = ({
  children,
  type = "single",
}) => {
  return <AccordionProvider type={type}>{children}</AccordionProvider>;
};
