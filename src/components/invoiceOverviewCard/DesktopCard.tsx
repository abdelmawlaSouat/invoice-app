import { Typography, Card } from "@/design-system/components";
import { InvoiceOverview } from "@/types/InvoiceOverview";
import styles from "./DesktopCard.module.scss";
import { FC } from "react";
import { Status, StatusTag } from "../statusTag";
import { RightArrow } from "@/design-system/icons";

interface InvoiceOverviewCardProps {
  invoice: InvoiceOverview;
}

export const DesktopCard: FC<InvoiceOverviewCardProps> = ({ invoice }) => {
  const dueDate = new Date(invoice.paymentDue).toLocaleDateString("en-BE", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
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
          {invoice.clientName}
        </Typography>
      </div>

      <div className={styles.rightPart}>
        <Typography variant="headingS" className={styles.amount}>
          {amount}
        </Typography>

        <StatusTag status={invoice.status as Status} />

        <RightArrow />
      </div>
    </Card>
  );
};
