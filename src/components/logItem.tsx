import styles from "@/styles/List.module.css";

class Item {
  timestamp: number;
  title: string;
  date: Date;
  dayOfWeekStrJP: string[];

  constructor(timestamp: string, title: string) {
    this.timestamp = Number(timestamp);
    this.title = title;
    console.log(this.timestamp);
    this.date = new Date(this.timestamp*1000);
    this.dayOfWeekStrJP = ["日", "月", "火", "水", "木", "金", "土"]
  }

  get year(): number{
    return this.date.getFullYear();
  }

  get localDate(){
    return this.date.toLocaleDateString().slice(5);
  }

  get week(){
    return "("+this.dayOfWeekStrJP[this.date.getDay()]+")";
  }

  get japanStandardTime() {
    return this.year.toString()+"/"+this.localDate+this.week;
  }
}

interface LogItemProps{
  item: Item;
}

const logItem: React.FC<LogItemProps> = ({ item }) => {
  const itemInstance = new Item(item.timestamp, item.title);

  return (
    <div className={styles.list}>
      <p className={styles.date}>{itemInstance.japanStandardTime}</p>
      <p>{itemInstance.title}</p>
    </div>
  );
};

export default logItem;
