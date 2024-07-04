import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
  // 필수 prop인 경우 Required<type>['속성명']
  // children: Required<ButtonHTMLAttributes<HTMLButtonElement>>["children"];
}

const Button = ({ size = "md", children, ...rest }: ButtonProps) => {
  return (
    <button {...rest}>
      {children}
    </button>
  );
};

export default Button;
