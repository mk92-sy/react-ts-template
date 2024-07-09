import css from "./Button.module.scss";
import {
  ButtonHTMLAttributes,
  HTMLAttributes,
  useEffect,
  useState,
} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  // 필수 prop인 경우 Required<type>['속성명']
  // children: Required<ButtonHTMLAttributes<HTMLButtonElement>>["children"];
}

interface RippleProps extends HTMLAttributes<HTMLSpanElement> {
  x: number;
  y: number;
}

const Button = ({
  size = "md",
  children,
  className,
  onClick,
  ...rest
}: ButtonProps) => {
  const [ripples, setRipples] = useState<RippleProps[]>([]);

  useEffect(() => {
    const timeouts = ripples.map((_, i) =>
      setTimeout(() => {
        setRipples((prevRipples) =>
          prevRipples.filter((_, index) => index !== i)
        );
      }, 600)
    );

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [ripples]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    setRipples((prevRipples) => [...prevRipples, { x, y }]);

    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button
      className={`${css.btn} ${css[size]}`}
      onClick={handleClick}
      {...rest}
    >
      {children}
      {ripples.map((ripple, index) => (
        <span
          className={css.riple}
          key={index}
          style={{ left: ripple.x, top: ripple.y }}
        />
      ))}
    </button>
  );
};

export default Button;
