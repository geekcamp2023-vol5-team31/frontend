import { ZenMaruGothic } from "@/fonts/ZenMaruGothic";

import Styles from "./header.module.css";

const Header = () => {
  return (
    <header className={`${Styles.header} ${ZenMaruGothic.className}`}>
      <h1 className={Styles.title}>わりかんじ</h1>
    </header>
  );
};
export { Header };
