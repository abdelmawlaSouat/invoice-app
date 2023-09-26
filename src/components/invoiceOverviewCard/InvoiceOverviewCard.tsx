import { Typography } from "@/design-system/components";
import { Card } from "@/design-system/components/card";
import { InvoiceOverview } from "@/types/InvoiceOverview";
import styles from "./InvoiceOverviewCard.module.scss";
import { FC } from "react";
import { StatusTag } from "../statusTag";

interface InvoiceOverviewCardProps {
  invoice: InvoiceOverview;
}

export const InvoiceOverviewCard: FC<InvoiceOverviewCardProps> = ({
  invoice,
}) => {
  const dueDate = new Date(invoice.dueDate).toLocaleDateString("en-BE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const amount = invoice.amount.toLocaleString("en-BE", {
    style: "currency",
    currency: "EUR",
  });

  return (
    <Card>
      <div className={styles.firstRow}>
        <Typography variant="body" className={styles.id}>
          <span className={styles.hashtag}>#</span>
          {invoice.id}
        </Typography>

        <Typography variant="body" className={styles.customerName}>
          {invoice.customer}
        </Typography>
      </div>

      <div className={styles.secondRow}>
        <div>
          <Typography variant="body" className={styles.dueDate}>
            {`Due ${dueDate}`}
          </Typography>

          <Typography variant="body" className={styles.amount}>
            {amount}
          </Typography>
        </div>

        <StatusTag status={invoice.status} />
      </div>
    </Card>
  );
};
