import styles from "@/styles/List.module.css";

interface ItemProps {
  date: string;
  title: string;
}

const logItem: React.FC<{ item: ItemProps }> = ({ item }) => {
  return (
    <div className={styles.list}>
      <p className={styles.date}>{item.date}</p>
      <p>{item.title}</p>
    </div>
  );
};

export default logItem;
