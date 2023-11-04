import { Typography, Card } from "@/design-system/components";
import { Invoice, InvoiceStatus } from "@/types";
import styles from "./DesktopCard.module.scss";
import { FC } from "react";
import { StatusTag } from "../statusTag";
import { RightArrow } from "@/design-system/icons";

type InvoiceOverviewCardProps = {
  invoice: Invoice;
};

export const DesktopCard: FC<InvoiceOverviewCardProps> = ({ invoice }) => {
  const dueDate = invoice.paymentDue
    ? new Date(invoice.paymentDue).toLocaleDateString("en-BE", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;
  const amount = invoice.total.toLocaleString("en-BE", {
    style: "currency",
    currency: "EUR",
  });

  return (
    <Card className={styles.wrapper}>
      <div className={styles.leftPart}>
        <Typography variant="headingS" className={styles.id}>
          <span className={styles.hashtag}>#</span>
          {invoice.id}
        </Typography>

        <Typography variant="body" className={styles.dueDate}>
          {`Due ${dueDate}`}
        </Typography>

        <Typography variant="body" className={styles.customerName}>
          {invoice.client.name}
        </Typography>
      </div>

      <div className={styles.rightPart}>
        <Typography variant="headingS" className={styles.amount}>
          {amount}
        </Typography>

        <StatusTag status={invoice.status as InvoiceStatus} />

        <RightArrow />
      </div>
    </Card>
  );
};
