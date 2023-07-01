import NextLink from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

import Styles from "./link.module.scss";

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
      <div className={Styles.iconWrapper}>
        <Icon className={Styles.icon} />
      </div>
      <span className={Styles.span}>{name}</span>
    </NextLink>
  );
};
export { Link };
