import css from "./Icon.module.scss";
import * as TYPES from "types";

export default function Icon({ type }: TYPES.IconProps): JSX.Element {
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

    case "close":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.28972 5.29289C5.68024 4.90237 6.31341 4.90237 6.70393 5.29289L11.9968 10.5858L17.2897 5.29289C17.6802 4.90237 18.3134 4.90237 18.7039 5.29289C19.0945 5.68342 19.0945 6.31658 18.7039 6.70711L13.411 12L18.7039 17.2929C19.0945 17.6834 19.0945 18.3166 18.7039 18.7071C18.3134 19.0976 17.6802 19.0976 17.2897 18.7071L11.9968 13.4142L6.70393 18.7071C6.31341 19.0976 5.68024 19.0976 5.28972 18.7071C4.8992 18.3166 4.8992 17.6834 5.28972 17.2929L10.5826 12L5.28972 6.70711C4.8992 6.31658 4.8992 5.68342 5.28972 5.29289Z"
            fill="#070F16"
            fillOpacity="0.82"
          />
        </svg>
      );
    default:
      throw new Error(`Unsupported icon type: ${type}`);
  }
}
