import { Typography } from "@/design-system/components";
import { LeftArrow } from "@/design-system/icons";
import styles from "./GoBackLink.module.scss";
import Link from "next/link";

export const GoBackLink = () => {
  return (
    <Link href="/" className={styles.wrapper}>
      <LeftArrow />

      <Typography variant="headingS">Back to invoices</Typography>
    </Link>
  );
};
