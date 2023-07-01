import { Total } from "@/components/payment/total";
import { useState } from "react";
import { ZenMaruGothic } from "@/fonts/ZenMaruGothic";
import Styles from "./payment.module.scss";
import { Collect } from "@/components/payment/collect/";

const Payment = () => {
  const [total, setTotal] = useState<number>();
  //この行を消すとbodyの方も読み込まれなくなるため一旦残す
  return (
    <div className={`${Styles.wrapper} ${ZenMaruGothic.className}`}>
      <Total value={total} onChange={setTotal} key={total} />
      <Collect amount={0} />
    </div>
  );
};

export { Payment };
