import styles from '../../styles/List.module.css';

const logList = () => {
    const listData = [
      { date: '2023 / 12 / 23 (土) ', title: 'クリスマス飲み会' },
      { date: '2023 / 12 / 31 (日) ', title: '忘年会' },
    ];
  
    return (
      <div className={styles.listContainer}>
        <ul className={styles.list}>
          {listData.map((event, index) => (
            <li key={index}>
              <p>{event.date}</p>
              <p>{event.title}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default logList;