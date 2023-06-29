import styles from "@/styles/List.module.css";

interface ItemProps {
  date: string;
  title: string;
}

const logItem: React.FC<{ item: ItemProps }> = ({ item }) => {
  return (
    <div className={styles.list}>
      <li>
        <p>{item.date}</p>
        <p>{item.title}</p>
      </li>
    </div>
  );
};

export default logItem;
