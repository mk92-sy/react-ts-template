import React from "react";
import { AccordionProvider } from "./AccordionContext";

interface AccordionProps {
  children: React.ReactNode;
  type?: "single" | "multiple";
}

export const Accordion = ({ children, type = "single" }: AccordionProps) => {
  return <AccordionProvider type={type}>{children}</AccordionProvider>;
};
