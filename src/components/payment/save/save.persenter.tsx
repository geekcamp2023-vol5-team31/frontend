import { ApplicationIcon } from "@xpadev-net/designsystem-icons";

import { TMember } from "@/@types/member";
import { API_ENDPOINT } from "@/env";
import { request } from "@/utils/request";

import Styles from "./save.module.scss";

type props = {
  total: number;
  members: TMember[];
};

const Save = ({ total, members }: props) => {
  const onClick = () => {
    void (async () => {
      const name = window.prompt("名前を入力してください");
      if (!name) return;
      const body = JSON.stringify({
        event_name: name,
        timestamp: Math.floor(Date.now() / 1000),
        total,
        data: members,
      });
      const req = await request(`${API_ENDPOINT}/myapp/create_event/`, {
        method: "POST",
        body,
      });
      const res = (await req.json()) as { event_id: string };
      console.log(res);
    })();
    //保存処理
  };

  return (
    <button className={Styles.button} onClick={onClick}>
      <ApplicationIcon className={Styles.icon} />
    </button>
  );
};

export { Save };
