import { ApplicationIcon } from "@xpadev-net/designsystem-icons";

import { TMember } from "@/@types/member";

import Styles from "./save.module.scss";

type props = {
  total: number;
  members: TMember[];
};

const Save = ({ total, members }: props) => {
  const onClick = () => {
    console.log(total, members);
    //保存処理
  };

  return (
    <button className={Styles.button} onClick={onClick}>
      <ApplicationIcon className={Styles.icon} />
    </button>
  );
};

export { Save };
