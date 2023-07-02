import Link from "next/link";

import { IItem } from "@/@types/item";
import styles from "@/styles/List.module.css";

class Item {
  title: string;
  date: Date;
  dayOfWeekStrJP: string[];

  constructor(item: IItem) {
    this.title = item.title;
    this.date = item.timestamp;
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

const logItem: React.FC<ItemProps> = ({ item }) => {
  const itemInstance = new Item(item);

  return (
    <Link href={`/?id=${item.id}`} className={styles.link}>
      <div className={styles.list}>
        <p className={styles.date}>{itemInstance.japanStandardTime}</p>
        <p>{itemInstance.title}</p>
      </div>
    </Link>
  );
};

export default logItem;
