import styles from "@/styles/List.module.css";

import LogItem from "./logItem";

const logList = () => {
  const item = [
    { id: "1", timestamp: 1703257200, title: "クリスマス飲み会" },
    { id: "2", timestamp: 1703948400, title: "忘年会" },
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
