import LogItem from './logItem';
import styles from '../../styles/List.module.css';

const logList = () => {
    const item = [
      { date: '2023 / 12 / 23 (土) ', title: 'クリスマス飲み会' },
      { date: '2023 / 12 / 31 (日) ', title: '忘年会' },
    ];
  
    return (
      <div >
        <ul className={styles.listContainer}>
          {item.map((event,index) => (
            <LogItem item={event} key={index} />
          ))}
        </ul>
      </div>
    );
  };
  
  export default logList;