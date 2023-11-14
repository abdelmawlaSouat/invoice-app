"use client";
import styles from "./invoice.module.scss";

import {
  CallToActionGroup,
  GoBackLink,
  InvoiceDetailCard,
  StatusTag,
} from "@/components";
import { Card, Typography } from "@/design-system/components";
import { Invoice, InvoiceStatus } from "@/types";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useWindowSize } from "@/design-system/hooks";
import { BREAKPOINTS } from "@/design-system/styles/breakpoints";
import dynamic from "next/dynamic";

const InvoiceFormModal = dynamic(() =>
  import("@/components").then((mod) => mod.InvoiceFormModal)
);

const DeleteInvoiceModal = dynamic(() =>
  import("@/components").then((mod) => mod.DeleteInvoiceModal)
);

type InvoiceDetailProps = {
  invoice: Invoice;
};

export default function InvoiceDetail({ invoice }: InvoiceDetailProps) {
  const [isDeleteInvoiceModalOpened, setIsDeleteInvoiceModalOpened] =
    useState(false);
  const [isEditInvoiceModalOpened, setIsEditInvoiceModalOpened] =
    useState(false);

  const [status, setStatus] = useState(invoice.status);
  const { push } = useRouter();
  const { width } = useWindowSize();

  const handleonMarkAsPaid = async () => {
    try {
      const res = await fetch(
        `/api/update-status?id=${invoice.id}&status=PAID`
      );

      const { invoice: updatedInvoice } = await res.json();

      setStatus(updatedInvoice.status || invoice.status);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOnDelete = async () => {
    try {
      const res = await fetch(`/api/delete-invoice?id=${invoice.id}`);
      const deletedInvoice = await res.json();

      if (deletedInvoice) {
        setIsDeleteInvoiceModalOpened(false);

        push("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleonEdit = () => {
    setIsEditInvoiceModalOpened(!isEditInvoiceModalOpened);
  };

  const toggleDeleteModal = () =>
    setIsDeleteInvoiceModalOpened(!isDeleteInvoiceModalOpened);

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
              onEdit={handleonEdit}
              onDelete={toggleDeleteModal}
              onMarkAsPaid={handleonMarkAsPaid}
            />
          </div>
        </Card>

        <InvoiceDetailCard invoice={invoice} />
      </div>

      {width < BREAKPOINTS.md && (
        <Card>
          <CallToActionGroup
            status={invoice.status as InvoiceStatus}
            onEdit={handleonEdit}
            onDelete={toggleDeleteModal}
            onMarkAsPaid={handleonMarkAsPaid}
          />
        </Card>
      )}

      {/* MODALS LIST */}

      <DeleteInvoiceModal
        onDelete={handleOnDelete}
        onClose={toggleDeleteModal}
        isOpen={isDeleteInvoiceModalOpened}
        invoiceID={invoice.id}
      />

      <InvoiceFormModal
        title={
          <>
            Edit <span className={styles.hashtag}>#</span>
            {invoice.id}
          </>
        }
        open={isEditInvoiceModalOpened}
        onClose={handleonEdit}
      />
    </main>
  );
}
