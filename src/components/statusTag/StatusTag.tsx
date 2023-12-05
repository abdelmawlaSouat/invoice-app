import { Typography } from "@/design-system/components";
import styles from "./StatusTag.module.scss";
import { FC } from "react";
import { DotFilledIcon } from "@radix-ui/react-icons";
import classNames from "classnames";
import { InvoiceStatus } from "@/types";

type StatusTagProps = {
  status: InvoiceStatus;
};

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
      <DotFilledIcon color={statusColors[status]} width={30} height={30} />

      <Typography variant="label" tag="span">
        {status}
      </Typography>
    </div>
  );
};
