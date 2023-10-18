"use client"; // should be removed !!!
import styles from "./invoice.module.scss";

import { GoBackLink, InvoiceDetailCard, StatusTag } from "@/components";
import type { Status } from "@/components";
import { Button, Card, Typography } from "@/design-system/components";
import { Invoice } from "@/types";

type Props = {
  invoice: Invoice;
};

export default function Invoice({ invoice }: Props) {
  return (
    <main className={styles.wrapper}>
      <div className={styles.content}>
        <GoBackLink />

        <Card className={styles.statusCard}>
          <Typography
            className={styles.secondaryText}
            variant="body"
            tag="span"
          >
            Status
          </Typography>

          <StatusTag status={invoice.status as Status} />
        </Card>

        <InvoiceDetailCard invoice={invoice} />
      </div>

      <Card className={styles.ctasWrapper}>
        <Button
          className={styles.editBtn}
          onClick={() => {
            alert("Edit");
          }}
        >
          Edit
        </Button>
        <Button
          className={styles.deleteBtn}
          onClick={() => {
            alert("Delete");
          }}
        >
          Delete
        </Button>
        <Button
          className={styles.markAsPaidBtn}
          onClick={() => {
            alert("Mark as Paid");
          }}
        >
          Mark as Paid
        </Button>
      </Card>
    </main>
  );
}
