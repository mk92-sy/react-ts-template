import css from "./Dimm.module.css";
import { HTMLAttributes } from "react";
interface DimmProps extends HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean;
}

export default function Dimm({ children, isOpen = false }: DimmProps) {
  return (
    <div
      aria-hidden={true}
      tabIndex={-1}
      className={`${css.dimm} ${isOpen ? css.show : ""}`}
      onClick={(e) => {
        e.stopPropagation();
        console.log(e);
      }}
    >
      {children}
    </div>
  );
}
