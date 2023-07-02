import styles from "@/styles/List.module.css";

import LogItem from "./logItem";

const logList = () => {
  const item = [
    { id: "1", timestamp: "2023-07-01T00:00:00", event_name: "クリスマス飲み会" },
    { id: "2", timestamp: "2023-08-01T00:00:00", event_name: "忘年会" },
  ];

  return (
    <div className={styles.listContainer}>
      {item.map((item) => (
        <LogItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default logList;
