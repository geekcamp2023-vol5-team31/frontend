import { useState } from "react";

import Styles from "@/components/text-input/text-input.module.scss";

type props = {
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

const TextInput = ({ value, onChange, className }: props) => {
  const [input, setInput] = useState(value);
  const onBlur = () => {
    onChange(input);
  };
  return (
    <input
      className={`${Styles.input} ${className}`}
      type="text"
      required
      value={input}
      onChange={(e) => {
        setInput(e.target.value);
      }}
      onFocus={(e) => e.target.select()}
      onBlur={onBlur}
    />
  );
};
export { TextInput };
