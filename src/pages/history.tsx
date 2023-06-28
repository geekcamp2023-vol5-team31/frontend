import Log from './components/logList';
import styles from '../styles/history.module.css';

const history = () => {
  return (
    <div>
      <h2 className={styles.pageName}>- わりかんきろく -</h2>
      <Log />
    </div>
  );
};

export default history;