import { InputHTMLAttributes, ChangeEvent } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  // 필수 prop인 경우 Required<type>['속성명']
  // children: Required<ButtonHTMLAttributes<HTMLButtonElement>>["children"];
}

const Input = ({ onChange, ...rest }: InputProps) => {
  return <input onChange={(e) => onChange(e)} {...rest} />;
};

export default Input;
