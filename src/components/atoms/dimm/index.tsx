import css from "./Dimm.module.scss";
import * as TYPES from "types";

export const Dimm = ({ children, isOpen = false }: TYPES.DimmProps) => {
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
};
