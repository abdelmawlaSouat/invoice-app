import { Typography } from "@/design-system/components";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import styles from "./GoBackLink.module.scss";
import Link from "next/link";

export const GoBackLink = () => {
  return (
    <Link href="/" className={styles.wrapper}>
      <ArrowLeftIcon />

      <Typography variant="headingS">Back to invoices</Typography>
    </Link>
  );
};
