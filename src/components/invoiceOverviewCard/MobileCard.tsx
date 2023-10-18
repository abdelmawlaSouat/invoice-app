import { Typography, Card } from "@/design-system/components";
import { Invoice } from "@/types/Invoice";
import styles from "./MobileCard.module.scss";
import { FC } from "react";
import { Status, StatusTag } from "../statusTag";

interface InvoiceOverviewCardProps {
  invoice: Invoice;
}

export const MobileCard: FC<InvoiceOverviewCardProps> = ({ invoice }) => {
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
      <div className={styles.firstRow}>
        <Typography variant="headingS" className={styles.id}>
          <span className={styles.hashtag}>#</span>
          {invoice.id}
        </Typography>

        <Typography variant="body" className={styles.customerName}>
          {invoice.clientName}
        </Typography>
      </div>

      <div className={styles.secondRow}>
        <div>
          <Typography variant="body" className={styles.dueDate}>
            {`Due ${dueDate}`}
          </Typography>

          <Typography variant="headingS" className={styles.amount}>
            {amount}
          </Typography>
        </div>

        <StatusTag status={invoice.status as Status} />
      </div>
    </Card>
  );
};