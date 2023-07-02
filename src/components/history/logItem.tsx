import styles from "@/styles/List.module.css";

class Item {
  timestamp: string;
  event_name: string;
  date: Date;
  dayOfWeekStrJP: string[];

  constructor(item: IItem) {
    this.timestamp = item.timestamp;
    this.event_name = item.event_name;
    this.date = new Date(this.timestamp);
    this.dayOfWeekStrJP = ["日", "月", "火", "水", "木", "金", "土"];
  }

  get year(): number {
    return this.date.getFullYear();
  }

  get localDate() {
    return this.date.toLocaleDateString().slice(5);
  }

  get week() {
    return "(" + this.dayOfWeekStrJP[this.date.getDay()] + ")";
  }

  get japanStandardTime() {
    return this.year.toString() + "/" + this.localDate + this.week;
  }
}

interface ItemProps {
  item: IItem;
}

interface IItem {
  id: string;
  timestamp: string;
  event_name: string;
}

const logItem: React.FC<ItemProps> = ({ item }) => {
  const itemInstance = new Item(item);

  return (
    <div className={styles.list}>
      <p className={styles.date}>{itemInstance.japanStandardTime}</p>
      <p>{itemInstance.event_name}</p>
    </div>
  );
};

export default logItem;
