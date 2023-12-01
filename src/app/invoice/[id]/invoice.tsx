"use client";
import styles from "./invoice.module.scss";

import {
  CallToActionGroup,
  GoBackLink,
  ItemsListCard,
  StatusTag,
} from "@/components";
import { Card, Toast, Typography } from "@/design-system/components";
import { Invoice, InvoiceStatus } from "@/types";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useToast, useWindowSize } from "@/design-system/hooks";
import { BREAKPOINTS } from "@/design-system/styles/breakpoints";
import dynamic from "next/dynamic";
import classNames from "classnames";
import {
  CalendarIcon,
  RocketIcon,
  BackpackIcon,
  EnvelopeClosedIcon,
  HomeIcon,
  PersonIcon,
} from "@radix-ui/react-icons";

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

  const dueDate = invoice.paymentDue
    ? new Date(invoice.paymentDue).toLocaleDateString("en-BE", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;

  const totalPrice = Intl.NumberFormat("en-BE", {
    style: "currency",
    currency: "EUR",
  }).format(invoice.total);

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

        <Card className={styles.generalDetail}>
          <div className={styles.header}>
            <div>
              <Typography variant="headingM" tag="span">
                Invoice
                <span className={styles.invoiceID}>{` #${invoice.id} `}</span>
              </Typography>
              for
              <Typography variant="headingM" tag="span">
                {` ${totalPrice}`}
              </Typography>
            </div>

            <StatusTag status={status as InvoiceStatus} />
          </div>

          <div className={styles.generalDetailItemsWrapper}>
            {invoice.description && (
              <div className={styles.generalDetailItemWrapper}>
                <div className={classNames(styles.propertyLabel)}>
                  <RocketIcon className={styles.icon} />

                  <Typography variant="body" tag="span">
                    {invoice.description}
                  </Typography>
                </div>
              </div>
            )}

            <div className={styles.generalDetailItemWrapper}>
              <div className={classNames(styles.propertyLabel)}>
                <CalendarIcon className={styles.icon} />

                <Typography variant="body" tag="span">
                  {`Due date: ${dueDate}`}
                </Typography>
              </div>
            </div>
          </div>

          {width >= BREAKPOINTS.md && (
            <CallToActionGroup
              status={invoice.status as InvoiceStatus}
              className={styles.ctaGroup}
              onEdit={handleonEdit}
              onDelete={toggleDeleteModal}
              onMarkAsPaid={handleonMarkAsPaid}
            />
          )}
        </Card>

        <div className={styles.companyAndClientWrapper}>
          <Card className={styles.personCard}>
            <Typography variant="headingS">Company Details</Typography>

            <div className={styles.personCardContent}>
              <div className={styles.personDetailItemWrapper}>
                <BackpackIcon className={styles.icon} />

                <Typography variant="body" tag="span">
                  {invoice.company.name}
                </Typography>
              </div>

              <div className={styles.personDetailItemWrapper}>
                <EnvelopeClosedIcon className={styles.icon} />

                <Typography variant="body" tag="span">
                  {invoice.company.email}
                </Typography>
              </div>

              <div className={styles.addressWrapper}>
                <HomeIcon className={styles.icon} />

                <div>
                  <Typography variant="body">
                    {invoice.company.address.street}
                  </Typography>

                  <Typography variant="body">
                    {`${invoice.company.address.postCode} ${invoice.company.address.city}, ${invoice.company.address.country}`}
                  </Typography>
                </div>
              </div>
            </div>
          </Card>

          <Card className={styles.personCard}>
            <Typography variant="headingS">Customer Details</Typography>

            <div className={styles.personCardContent}>
              <div className={styles.personDetailItemWrapper}>
                <PersonIcon className={styles.icon} />

                <Typography variant="body" tag="span">
                  {invoice.client.name}
                </Typography>
              </div>

              <div className={styles.personDetailItemWrapper}>
                <EnvelopeClosedIcon className={styles.icon} />

                <Typography variant="body" tag="span">
                  {invoice.client.email}
                </Typography>
              </div>

              <div className={styles.addressWrapper}>
                <HomeIcon className={styles.icon} />

                <div>
                  <Typography variant="body">
                    {invoice.client.address.street}
                  </Typography>

                  <Typography variant="body">
                    {`${invoice.client.address.postCode} ${invoice.client.address.city}, ${invoice.company.address.country}`}
                  </Typography>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <ItemsListCard invoice={invoice} />
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
            Edit Invoice
            <span className={styles.invoiceID}>{` #${invoice.id} `}</span>
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
