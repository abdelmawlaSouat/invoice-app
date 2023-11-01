import { Typography } from "@/design-system/components";
import styles from "./StatusTag.module.scss";
import { FC } from "react";
import { Oval } from "@/design-system/icons";
import classNames from "classnames";

export type Status = "PAID" | "PENDING" | "DRAFT";

interface StatusTagProps {
  status: Status;
}

const statusColors = {
  PAID: "#33D69F",
  PENDING: "#FF8F00",
  DRAFT: "#373B53",
};

export const StatusTag: FC<StatusTagProps> = ({ status }) => {
  return (
    <div
      className={classNames(styles.wrapper, styles[status.toLocaleLowerCase()])}
    >
      <Oval color={statusColors[status]} />

      <Typography variant="headingS" tag="span">
        {status}
      </Typography>
    </div>
  );
};
