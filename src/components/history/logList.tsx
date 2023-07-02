import { useEffect, useState } from "react";

import { IItem } from "@/@types/item";
import styles from "@/styles/List.module.css";
import { request } from "@/utils/request";

import LogItem from "./logItem";

const logList = () => {
  const [item, setItem] = useState<IItem[]>([]);
  useEffect(() => {
    void (async () => {
      const req = await request("/get_events/");
      const res = (await req.json()) as {
        id: number;
        event_name: string;
        timestamp: string;
      }[];
      setItem(
        res.map((item) => {
          return {
            id: item.id,
            timestamp: new Date(item.timestamp),
            title: item.event_name,
          };
        })
      );
    })();
  }, []);

  return (
    <div className={styles.listContainer}>
      {item.map((item) => (
        <LogItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default logList;
