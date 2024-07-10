import css from "./Icon.module.scss";

interface IconProps {
  type: "plus" | "dash" | "spinner";
}

export default function Icon({ type }: IconProps): JSX.Element {
  switch (type) {
    case "plus":
    case "dash":
      return <span tabIndex={-1} className={`${css.icon} ${css[type]}`} />;
    case "spinner":
      return (
        <svg
          className={`${css["svg-icon"]} ${css[type]}`}
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="45" />
        </svg>
      );
    default:
      throw new Error(`Unsupported icon type: ${type}`);
  }
}
