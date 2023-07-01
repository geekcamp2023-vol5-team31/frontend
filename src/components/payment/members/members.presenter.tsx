import { AddOutlinedIcon } from "@xpadev-net/designsystem-icons";

import { TMember } from "@/@types/member";
import { Member } from "@/components/payment/members/member";
import { uuid } from "@/utils/uuid";

import Styles from "./members.module.scss";

type props = {
  members: TMember[];
  collect: number;
  onChange: (members: TMember[]) => void;
};

const Members = ({ members, onChange, collect }: props) => {
  const addMember = () => {
    onChange([
      ...members,
      {
        id: uuid(),
        name: `ユーザー${members.length}`,
        amount: undefined,
      },
    ]);
  };
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.titleWrapper}>
        <h2 className={Styles.title}>参加者</h2>
        <button className={Styles.button} onClick={addMember}>
          <AddOutlinedIcon className={Styles.icon} />
        </button>
      </div>
      <div className={Styles.members}>
        {members.map((member, index) => {
          return (
            <Member
              member={member}
              collect={collect}
              onChange={(member) => {
                members.splice(index, 1, member);
                onChange([...members]);
              }}
              key={member.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export { Members };
