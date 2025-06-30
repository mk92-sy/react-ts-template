import { ReactNode } from "react";
import { RadioGroupContext } from "../../context/RadioContext";
import css from "./Radio.module.scss";

interface RadioGroupProps {
  direction?: string;
  name: string;
  selectedValue: string;
  onChange: (value: string) => void;
  children: ReactNode;
  legend?: string;
}

const RadioGroup = ({
  direction = "row",
  name,
  selectedValue,
  onChange,
  children,
  legend,
}: RadioGroupProps) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLFieldSetElement>) => {
    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      event.preventDefault();
      const radios = Array.from(
        event.currentTarget.querySelectorAll<HTMLInputElement>(
          'input[type="radio"]'
        )
      );
      const currentIndex = radios.findIndex((radio) => radio.checked);
      const nextIndex = (currentIndex + 1) % radios.length;
      radios[nextIndex].click();
      radios[nextIndex].focus();
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      event.preventDefault();
      const radios = Array.from(
        event.currentTarget.querySelectorAll<HTMLInputElement>(
          'input[type="radio"]'
        )
      );
      const currentIndex = radios.findIndex((radio) => radio.checked);
      const prevIndex = (currentIndex - 1 + radios.length) % radios.length;
      radios[prevIndex].click();
      radios[prevIndex].focus();
    }
  };

  return (
    <RadioGroupContext.Provider value={{ name, selectedValue, onChange }}>
      <fieldset className={css.fieldset} onKeyDown={handleKeyDown}>
        {legend && <legend className={css.legend}>{legend}</legend>}
        <div className={`${css.group} ${css[direction]}`} role="radiogroup">
          {children}
        </div>
      </fieldset>
    </RadioGroupContext.Provider>
  );
};

export default RadioGroup;
