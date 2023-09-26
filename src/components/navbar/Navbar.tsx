import { Logo } from "@/design-system/icons";
import userIcon from "./user.png";
import Image from "next/image";
import styles from "./Navbar.module.scss";
import { ThemeSwitcher } from "../themeSwitcher";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className={styles.wrapper}>
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
