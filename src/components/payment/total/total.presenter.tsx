import Styles from "./total.module.scss";
import { NumberInput } from "@/components/number-input";

type props = {
  value: number | undefined;
  onChange: (value: number) => void;
};

const Total = ({ value, onChange }: props) => {
  return (
    <div className={Styles.wrapper}>
      <h2 className={Styles.title}>支払い総額</h2>
      <label className={Styles.inputWrapper}>
        <NumberInput
          value={value}
          onChange={onChange}
          className={Styles.input}
        />
        <span className={Styles.unit}>円</span>
      </label>
    </div>
  );
};

export { Total };
