import { HTMLAttributes, useContext } from "react";
import { RadioGroupContext } from "../../context/RadioContext";
import css from "./Radio.module.scss";

interface RadioProps extends HTMLAttributes<HTMLInputElement> {
  value: string;
  id?: string;
  label?: string;
}

const Radio = ({ value, id, className }: RadioProps) => {
  const context = useContext(RadioGroupContext);
  if (!context) {
    throw new Error("Radio must be used within a RadioGroup");
  }
  const { name, selectedValue, onChange } = context;

  return (
    <div className={`${css.wrapper}`}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={selectedValue === value}
        onChange={() => onChange(value)}
        className={`${css.radio} ${className || ""}`}
      />
    </div>
  );
};

export default Radio;
