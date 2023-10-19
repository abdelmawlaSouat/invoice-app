"use client"; // should be removed !!!
import styles from "./invoice.module.scss";

import { GoBackLink, InvoiceDetailCard, StatusTag } from "@/components";
import type { Status } from "@/components";
import { Button, Card, Typography } from "@/design-system/components";
import { Invoice } from "@/types";
import classNames from "classnames";

type Props = {
  invoice: Invoice;
};

const CallToActionGroup = ({ className }: { className?: string }) => (
  <div className={classNames(styles.ctasWrapper, className)}>
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
  </div>
);

export default function Invoice({ invoice }: Props) {
  return (
    <main className={styles.wrapper}>
      <div className={styles.content}>
        <GoBackLink />

        <Card className={styles.statusAndCtasWrapper}>
          <div className={styles.statusWrapper}>
            <Typography
              className={styles.secondaryText}
              variant="body"
              tag="span"
            >
              Status
            </Typography>

            <StatusTag status={invoice.status as Status} />
          </div>

          <div className={styles.ctaGroupOnDesktop}>
            <CallToActionGroup className={styles.CtaGroup} />
          </div>
        </Card>

        <InvoiceDetailCard invoice={invoice} />
      </div>

      <Card className={styles.ctaGroupOnMobile}>
        <CallToActionGroup />
      </Card>
    </main>
  );
}
