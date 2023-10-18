import styles from "./invoice.module.scss";

import { GoBackLink, InvoiceDetailCard, StatusTag } from "@/components";
import type { Status } from "@/components";
import { Card, Typography } from "@/design-system/components";
import { Invoice } from "@/types";

type Props = {
  invoice: Invoice;
};

export default function Invoice({ invoice }: Props) {
  return (
    <main className={styles.wrapper}>
      <GoBackLink />

      <Card className={styles.statusCard}>
        <Typography className={styles.secondaryText} variant="body" tag="span">
          Status
        </Typography>

        <StatusTag status={invoice.status as Status} />
      </Card>

      <InvoiceDetailCard invoice={invoice} />
    </main>
  );
}
