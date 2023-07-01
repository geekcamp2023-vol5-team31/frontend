import Styles from "./total.module.scss";
import { useState } from "react";

type props = {
  value: number | undefined;
  onChange: (value: number) => void;
};

const Total = ({ value, onChange }: props) => {
  const [amount, setAmount] = useState(`${value ?? ""}`);
  const onBlur = () => {
    const value = Number(amount);
    if (isNaN(value)) return;
    onChange(value);
    setAmount(`${value}`);
  };
  return (
    <div className={Styles.wrapper}>
      <h2 className={Styles.title}>支払い総額</h2>
      <label className={Styles.inputWrapper}>
        <input
          className={Styles.input}
          type="text"
          aria-label="number"
          pattern={"[1-9][0-9]*"}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          onBlur={onBlur}
        />
        <span className={Styles.unit}>円</span>
      </label>
    </div>
  );
};

export { Total };
