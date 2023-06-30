import Styles from "./link.module.scss";
import NextLink from "next/link";
import { FC } from "react";
import { useRouter } from "next/router";

type props = {
  className?: string;
  href: string;
  name: string;
  Icon: FC<{ className?: string }>;
};

const Link = ({ href, name, Icon, className }: props) => {
  const { pathname } = useRouter();
  return (
    <NextLink
      href={href}
      className={`${Styles.link} ${className} ${
        pathname === href && Styles.active
      }`}
    >
      <Icon className={Styles.icon} />
      <span className={Styles.span}>{name}</span>
    </NextLink>
  );
};
export { Link };