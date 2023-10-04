import { Logo } from "@/design-system/icons";
import userIcon from "./user.png";
import Image from "next/image";
import styles from "./Navbar.module.scss";
import { ThemeSwitcher } from "../themeSwitcher";
import Link from "next/link";
import classNames from "classnames";
import { FC } from "react";
import { useWindowSize } from "@/design-system/hooks";
import { BREAKPOINTS } from "@/design-system/styles/breakpoints";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { width } = useWindowSize();
  return (
    <nav className={classNames(styles.wrapper, className)}>
      <Link href="/">
        <Logo size={width > BREAKPOINTS.md ? 103 : 72} />
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
