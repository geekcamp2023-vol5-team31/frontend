import { TMember } from "@/@types/member";
import { NumberInput } from "@/components/number-input";
import { TextInput } from "@/components/text-input";

import Styles from "./member.module.scss";

type props = {
  member: TMember;
  collect: number;
  onChange: (member: TMember) => void;
};

const Member = ({ member, onChange, collect }: props) => {
  const diff = (member.amount ?? 0) - collect;
  return (
    <div className={Styles.wrapper}>
      <TextInput
        className={Styles.name}
        value={member.name}
        onChange={(name) => {
          onChange({ ...member, name });
        }}
      />
      <div className={Styles.amount}>
        <NumberInput
          className={Styles.input}
          value={member.amount}
          onChange={(amount) => {
            onChange({ ...member, amount });
          }}
        />
        <span className={Styles.unit}>円</span>
      </div>
      <div
        className={`${Styles.diff} ${
          diff < 0 ? Styles.minus : diff > 0 ? Styles.plus : ""
        }`}
      >
        {diff > 0 ? "+" : ""}
        {diff}
      </div>
    </div>
  );
};
export { Member };
