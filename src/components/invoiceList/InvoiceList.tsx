"use client";
import { useWindowSize } from "@/design-system/hooks";
import { useState } from "react";
import { Invoice, InvoiceStatus } from "@/types";
import Link from "next/link";
import styles from "./InvoiceList.module.scss";
import { Button, Typography } from "@/design-system/components";
import { Add } from "@/design-system/icons";
import { BREAKPOINTS } from "@/design-system/styles/breakpoints";
import { FilterByStatus } from "../filterByStatus";
import { InvoiceOverviewCard } from "../invoiceOverviewCard";
import { EmptyListMessage } from "../emptyListMessage";
import { InvoiceFormModal } from "../invoiceFormModal";

const defaultFilters = {
  PAID: false,
  PENDING: false,
  DRAFT: false,
};

type InvoiceListProps = {
  invoices: Invoice[];
};

export const InvoiceList = ({ invoices }: InvoiceListProps) => {
  const [activeFilters, setActiveFilters] = useState(defaultFilters);
  const { width } = useWindowSize();
  const [isCreateInvoiceModalOpened, setIsCreateInvoiceModalOpened] =
    useState(false);

  const handleFilters = (key: InvoiceStatus, value: boolean) => {
    setActiveFilters({
      ...activeFilters,
      [key]: value,
    });
  };

  const noFiltersActive = Object.values(activeFilters).every(
    (filter) => filter === false
  );

  const invoicesToDisplay = invoices
    .filter(
      (invoice) =>
        noFiltersActive || activeFilters[invoice.status as InvoiceStatus]
    )
    .map((invoice) => (
      <Link
        key={invoice.id}
        href={`/invoice/${invoice.id}`}
        className={styles.invoiceWrapperLink}
      >
        <InvoiceOverviewCard invoice={invoice} />
      </Link>
    ));

  const handleonCreateInvoice = () => {
    setIsCreateInvoiceModalOpened(!isCreateInvoiceModalOpened);
  };

  // TODO: Add the new invoice in the list + add a toaster
  const handleOnSubmit = async (data: any) => {
    try {
      await fetch(`/api/create-invoice`, {
        method: "POST",
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div>
          <Typography variant="headingL" tag="h1" className={styles.title}>
            Invoices
          </Typography>

          <Typography variant="body" className={styles.invoicesLength}>
            {invoicesToDisplay.length} invoice
            {invoicesToDisplay.length > 1 && "s"}
          </Typography>
        </div>

        <div className={styles.btnsWrapper}>
          <FilterByStatus
            activeFilters={activeFilters}
            onChange={handleFilters}
          />

          <Button
            className={styles.addInvoiceBtn}
            onClick={handleonCreateInvoice}
          >
            <Add />
            <span>{width >= BREAKPOINTS.md ? "New Invoice" : "New"}</span>
          </Button>
        </div>
      </div>

      <div className={styles.invoicesWrapper}>
        {invoicesToDisplay.length > 0 ? (
          invoicesToDisplay
        ) : (
          <EmptyListMessage className={styles.emptyListMessage} />
        )}
      </div>

      <InvoiceFormModal
        title="New Invoice"
        open={isCreateInvoiceModalOpened}
        onClose={handleonCreateInvoice}
        onSubmit={handleOnSubmit}
      />
    </div>
  );
};
