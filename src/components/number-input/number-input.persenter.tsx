import { useState } from "react";

import Styles from "@/components/number-input/number-input.module.scss";

type props = {
  value: number | undefined;
  onChange: (value: number) => void;
  className?: string;
};

const NumberInput = ({ value, onChange, className }: props) => {
  const [input, setInput] = useState(`${value ?? ""}`);
  const onBlur = () => {
    const value = Number(input);
    if (isNaN(value)) return;
    onChange(value);
    setInput(`${value}`);
  };
  return (
    <input
      className={`${Styles.input} ${className}`}
      type="text"
      aria-label="number"
      pattern={"[1-9][0-9]*|0"}
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onBlur={onBlur}
    />
  );
};
export { NumberInput };
