"use client";
import styles from "./invoice.module.scss";

import {
  CallToActionGroup,
  GoBackLink,
  InvoiceDetailCard,
  StatusTag,
} from "@/components";
import { Card, Toast, Typography } from "@/design-system/components";
import { Invoice, InvoiceStatus } from "@/types";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useToast, useWindowSize } from "@/design-system/hooks";
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
  const { toast, showToast, hideToast } = useToast();
  const { width } = useWindowSize();

  const handleonMarkAsPaid = async () => {
    try {
      const res = await fetch(`/api/update-status`, {
        method: "POST",
        body: JSON.stringify({
          id: invoice.id,
          status: "PAID",
        }),
      });

      const { status, invoice: updatedInvoice } = await res.json();

      if (status === "OK") {
        showToast("success", {
          title: "Invoice Paid",
          message: "The invoice was successfully marked as paid.",
        });

        setStatus(updatedInvoice.status || invoice.status);
      }
    } catch (error) {
      showToast("error", {
        title: "Error while updating the invoice",
        message:
          "Something went wrong while updating the invoice. Please try again.",
      });
    }
  };

  const handleOnDelete = async () => {
    try {
      const res = await fetch(`/api/delete-invoice`, {
        method: "POST",
        body: JSON.stringify({ id: invoice.id }),
      });
      const { status } = await res.json();

      if (status === "OK") {
        setIsDeleteInvoiceModalOpened(false);
        showToast("success", {
          title: "Invoice Removed",
          message:
            "The invoice was successfully removed. You will now be redirected to the invoice list page in a few seconds...",
        });

        setTimeout(() => {
          push("/");
        }, 4000);
      }
    } catch (error) {
      showToast("error", {
        title: "Error while deleting the invoice",
        message:
          "Something went wrong while deleting the invoice. Please try again.",
      });
    }
  };

  const handleonEdit = () => {
    setIsEditInvoiceModalOpened(!isEditInvoiceModalOpened);
  };

  const toggleDeleteModal = () =>
    setIsDeleteInvoiceModalOpened(!isDeleteInvoiceModalOpened);

  const handleOnSubmit = async (data: any) => {
    try {
      const res = await fetch(`/api/update-invoice`, {
        method: "POST",
        body: JSON.stringify({
          ...data,
          id: invoice.id,
          clientId: invoice.clientId,
          clientAddressID: invoice.client.addressId,
          companyId: invoice.companyId,
          companyAddressID: invoice.company.addressId,
        }),
      });

      const { status } = await res.json();

      if (status === "OK") {
        showToast("success", {
          title: "Invoice Updated",
          message: "The invoice was successfully updated.",
        });

        setIsEditInvoiceModalOpened(false);
      }
    } catch (error) {
      showToast("error", {
        title: "Error while updating the invoice",
        message:
          "Something went wrong while updating the invoice. Please try again.",
      });
    }
  };

  return (
    <main className={styles.wrapper}>
      <div className={styles.content}>
        <GoBackLink />

        <Toast
          open={!!toast}
          title={toast.title}
          message={toast.message}
          type={toast.type}
          onClose={hideToast}
        />

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
            status={status as InvoiceStatus}
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
            Edit invoice<span className={styles.hashtag}> #</span>
            {invoice.id}
          </>
        }
        open={isEditInvoiceModalOpened}
        onClose={handleonEdit}
        invoice={invoice}
        onSubmit={handleOnSubmit}
      />
    </main>
  );
}
