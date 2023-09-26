import { Typography } from "@/design-system/components";
import styles from "./StatusTag.module.scss";
import { FC } from "react";
import { Oval } from "@/design-system/icons";
import classNames from "classnames";

export type Status = "paid" | "pending" | "draft";

interface StatusTagProps {
  status: Status;
}

const statusColors = {
  paid: "#33D69F",
  pending: "#FF8F00",
  draft: "#373B53",
};

export const StatusTag: FC<StatusTagProps> = ({ status }) => {
  return (
    <div className={classNames(styles.wrapper, styles[status])}>
      <Oval color={statusColors[status]} />

      <Typography variant="body" tag="span">
        {status}
      </Typography>
    </div>
  );
};
