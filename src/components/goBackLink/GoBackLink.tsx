"use client";

import { Typography } from "@/design-system/components";
import { LeftArrow } from "@/design-system/icons";
import { useRouter } from "next/navigation";
import styles from "./GoBackLink.module.scss";

export const GoBackLink = () => {
  const router = useRouter();

  return (
    <button className={styles.wrapper} onClick={() => router.back()}>
      <LeftArrow />

      <Typography className={styles.text} variant="headingS" tag="span">
        Go back
      </Typography>
    </button>
  );
};
