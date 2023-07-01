import { useState } from "react";

import { TMember } from "@/@types/member";
import { Collect } from "@/components/payment/collect/";
import { Members } from "@/components/payment/members";
import { Total } from "@/components/payment/total";
import { ZenMaruGothic } from "@/fonts/ZenMaruGothic";
import { uuid } from "@/utils/uuid";

import Styles from "./payment.module.scss";

const Payment = () => {
  const [total, setTotal] = useState<number>();

  const [members, setMembers] = useState<TMember[]>([
    {
      id: uuid(),
      name: "自分",
      amount: undefined,
    },
  ]);
  const amount = Math.floor((total ?? 0) / members.length);

  //この行を消すとbodyの方も読み込まれなくなるため一旦残す
  return (
    <div className={`${Styles.wrapper} ${ZenMaruGothic.className}`}>
      <Total value={total} onChange={setTotal} key={total} />
      <Collect amount={amount} />
      <Members members={members} onChange={setMembers} collect={amount} />
    </div>
  );
};

export { Payment };