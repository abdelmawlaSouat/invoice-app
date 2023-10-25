"use client"; // should be removed !!!
import styles from "./invoice.module.scss";

import { GoBackLink, InvoiceDetailCard, StatusTag } from "@/components";
import type { Status } from "@/components";
import { DeleteInvoiceModal } from "@/components";
import { Button, Card, Typography } from "@/design-system/components";
import { Invoice } from "@/types";
import classNames from "classnames";
import { useState } from "react";

type Props = {
  invoice: Invoice;
};

const CallToActionGroup = ({
  className,
  onEdited,
  onDeleted,
  onMarkedAsPaid,
}: {
  className?: string;
  onEdited: () => void;
  onDeleted: () => void;
  onMarkedAsPaid: () => void;
}) => (
  <div className={classNames(styles.ctasWrapper, className)}>
    <Button className={styles.editBtn} onClick={onEdited}>
      Edit
    </Button>

    <Button className={styles.deleteBtn} onClick={onDeleted}>
      Delete
    </Button>

    <Button className={styles.markAsPaidBtn} onClick={onMarkedAsPaid}>
      Mark as Paid
    </Button>
  </div>
);

export default function Invoice({ invoice }: Props) {
  const [modalIsOpened, setModalIsOpened] = useState(false);

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
            <CallToActionGroup
              className={styles.CtaGroup}
              onEdited={() => {
                alert("Edit");
              }}
              onDeleted={() => setModalIsOpened(true)}
              onMarkedAsPaid={() => {
                alert("Mark as Paid");
              }}
            />
          </div>
        </Card>

        <InvoiceDetailCard invoice={invoice} />
      </div>

      <Card className={styles.ctaGroupOnMobile}>
        <CallToActionGroup
          onEdited={() => {
            alert("Edit");
          }}
          onDeleted={() => setModalIsOpened(true)}
          onMarkedAsPaid={() => {
            alert("Mark as Paid");
          }}
        />
      </Card>

      <DeleteInvoiceModal
        onDeleted={() => {}}
        onCanceled={() => setModalIsOpened(false)}
        isOpen={modalIsOpened}
        invoiceID={invoice.id}
      />
    </main>
  );
}
