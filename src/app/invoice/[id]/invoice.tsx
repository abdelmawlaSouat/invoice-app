"use client"; // should be removed !!!
import styles from "./invoice.module.scss";

import { GoBackLink, InvoiceDetailCard, StatusTag } from "@/components";
import { DeleteInvoiceModal } from "@/components";
import { Button, Card, Typography } from "@/design-system/components";
import { Invoice, InvoiceStatus } from "@/types";
import classNames from "classnames";
import { useState } from "react";
import { redirect, useRouter } from "next/navigation";

type Props = {
  invoice: Invoice;
};

const CallToActionGroup = ({
  className,
  status,
  onEdited,
  onDeleted,
  onMarkedAsPaid,
}: {
  className?: string;
  status: InvoiceStatus;
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

    {status === "PENDING" && (
      <Button className={styles.markAsPaidBtn} onClick={onMarkedAsPaid}>
        Mark as Paid
      </Button>
    )}
  </div>
);

export default function Invoice({ invoice }: Props) {
  const [modalIsOpened, setModalIsOpened] = useState(false);
  const [status, setStatus] = useState(invoice.status);
  const router = useRouter();

  const handleOnMarkedAsPaid = async () => {
    const res = await fetch(`/api/update-status?id=${invoice.id}&status=PAID`);
    const updatedInvoice = await res.json();

    setStatus(updatedInvoice.status || invoice.status);
  };

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

            <StatusTag status={status as InvoiceStatus} />
          </div>

          <div className={styles.ctaGroupOnDesktop}>
            <CallToActionGroup
              status={invoice.status as InvoiceStatus}
              className={styles.CtaGroup}
              onEdited={() => {
                alert("Edit");
              }}
              onDeleted={() => {
                setModalIsOpened(true);
              }}
              onMarkedAsPaid={handleOnMarkedAsPaid}
            />
          </div>
        </Card>

        <InvoiceDetailCard invoice={invoice} />
      </div>

      <Card className={styles.ctaGroupOnMobile}>
        <CallToActionGroup
          status={invoice.status as InvoiceStatus}
          onEdited={() => {
            alert("Edit");
          }}
          onDeleted={() => {
            setModalIsOpened(true);
          }}
          onMarkedAsPaid={handleOnMarkedAsPaid}
        />
      </Card>

      <DeleteInvoiceModal
        onDeleted={async () => {
          const res = await fetch(`/api/delete-invoice?id=${invoice.id}`);
          const deletedInvoice = await res.json();

          if (deletedInvoice) {
            setModalIsOpened(false);

            router.push("/");
          }
        }}
        onCanceled={() => setModalIsOpened(false)}
        isOpen={modalIsOpened}
        invoiceID={invoice.id}
      />
    </main>
  );
}
