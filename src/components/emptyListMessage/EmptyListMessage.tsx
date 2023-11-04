import Image from "next/image";
import styles from "./EmptyListMessage.module.scss";
import img from "./illustration.svg";
import { Typography } from "@/design-system/components";
import classNames from "classnames";
import { FC } from "react";

type EmptyListMessageProps = {
  className?: string;
};

export const EmptyListMessage: FC<EmptyListMessageProps> = ({ className }) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <Image src={img} alt="illustration" />

      <div className={styles.content}>
        <Typography variant="headingL" className={styles.title}>
          There is nothing here
        </Typography>

        <Typography variant="body" tag="span" className={styles.description}>
          Create an invoice by clicking the <strong>New</strong> button and get
          started
        </Typography>
      </div>
    </div>
  );
};
