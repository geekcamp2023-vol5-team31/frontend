import Styles from "./footer.module.css";
import { Link } from "@/components/footer/link";
import { InvoiceIcon, HistoryIcon } from "@xpadev-net/designsystem-icons";

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <Link
        href={"/"}
        name={"計算"}
        Icon={InvoiceIcon}
        className={Styles.link}
      />
      <Link
        href={"/history"}
        name={"履歴"}
        Icon={HistoryIcon}
        className={Styles.link}
      />
    </footer>
  );
};

export { Footer };
