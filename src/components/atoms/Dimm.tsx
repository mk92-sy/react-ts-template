import css from "./Dimm.module.scss";

interface DimmProps {
  isOpen?: boolean;
}

export default function Dimm({ isOpen = false }: DimmProps) {
  return <div tabIndex={-1} className={`${css.dimm} ${isOpen ? css.open : css.close}`} />;
}
