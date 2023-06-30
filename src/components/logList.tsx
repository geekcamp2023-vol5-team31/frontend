import LogItem from "./logItem";
import styles from "@/styles/List.module.css";

const logList = () => {
  const item = [
    { id: "1", date: "2023/12/23(土)", title: "クリスマス飲み会" },
    { id: "2", date: "2023/12/31(日)", title: "忘年会" },
  ];

  return (
    <div className={styles.listContainer}>
      {item.map(item => (
        <LogItem key={item.id} item={item}/>
      ))}
    </div>
  );
};

export default logList;
