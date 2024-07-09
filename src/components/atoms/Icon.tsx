import css from "./Icon.module.scss";

interface IconProps {
  type: string;
}

export default function Icon({ type }: IconProps) {
  return <span tabIndex={-1} className={`${css.icon} ${css[type]}`} />;
}
