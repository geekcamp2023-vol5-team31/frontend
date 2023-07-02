import { ApplicationIcon } from "@xpadev-net/designsystem-icons";
import { useRouter } from "next/router";

import { TMember } from "@/@types/member";
import { date2str } from "@/utils/date2str";
import { request } from "@/utils/request";

import Styles from "./save.module.scss";

type props = {
  total: number;
  members: TMember[];
};

const Save = ({ total, members }: props) => {
  const { push } = useRouter();
  const onClick = () => {
    void (async () => {
      const name = window.prompt("名前を入力してください");
      if (!name) return;
      const body = JSON.stringify({
        event_name: name,
        timestamp: date2str(new Date()),
        total,
        data: members,
      });
      await request(`/myapp/create_event/`, {
        method: "POST",
        body,
      });
      await push("/history");
    })();
  };

  return (
    <button className={Styles.button} onClick={onClick}>
      <ApplicationIcon className={Styles.icon} />
    </button>
  );
};

export { Save };
