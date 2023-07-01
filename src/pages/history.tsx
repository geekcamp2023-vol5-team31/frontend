import Log from "@/components/logList";
import styles from "@/styles/history.module.css";

const history = () => {
  return (
    <div className={styles.page}>
      <h3 className={styles.pageName}>わりかんきろく</h3>
      <Log />
    </div>
  );
};

export default history;
