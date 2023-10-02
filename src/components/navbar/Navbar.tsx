import { Logo } from "@/design-system/icons";
import userIcon from "./user.png";
import Image from "next/image";
import styles from "./Navbar.module.scss";
import { ThemeSwitcher } from "../themeSwitcher";
import Link from "next/link";
import classNames from "classnames";
import { FC } from "react";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <nav className={classNames(styles.wrapper, className)}>
      <Link href="/">
        <Logo />
      </Link>

      <div className={styles.contentWrapper}>
        <ThemeSwitcher />

        <div className={styles.imgWrapper}>
          <Image src={userIcon} alt="user" width="32" height="32" />
        </div>
      </div>
    </nav>
  );
};
