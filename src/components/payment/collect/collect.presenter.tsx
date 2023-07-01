import Styles from "./collect.module.scss";

type props = {
  amount: number;
};

const Collect = ({ amount }: props) => {
  return (
    <div className={Styles.wrapper}>
      <h2 className={Styles.title}>徴収額</h2>
      <div className={Styles.amountWrapper}>
        <span className={Styles.amount}>{amount}</span>
        <span className={Styles.unit}>円</span>
      </div>
    </div>
  );
};

export { Collect };
