import Log from "@/components/history/logList";
import LoginButton from "@/components/history/unregistered/login";
import styles from "@/styles/history.module.css";

const history = () => {
  //ログイン時の処理
  /*return (
    <div className={styles.page}>
      <h3 className={styles.pageName}>わりかんきろく</h3>
      <Log />
    </div>
  );*/

  //未登録時の処理
  return (
    <div className={styles.unregistered}>
      <p>この機能はログイン時のみ</p>
      <p>使用可能です</p>
      <LoginButton />
    </div>
  );
};

export default history;
