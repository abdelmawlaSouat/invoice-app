"use client";
import { useWindowSize } from "@/design-system/hooks";
import { useState } from "react";
import {
  InvoiceOverviewCard,
  Status,
  FilterByStatus,
  EmptyListMessage,
} from "@/components";
import { Invoice } from "@/types";
import Link from "next/link";
import styles from "./InvoiceList.module.scss";
import { Button, Typography } from "@/design-system/components";
import { Add } from "@/design-system/icons";
import { BREAKPOINTS } from "@/design-system/styles/breakpoints";

const defaultFilters = {
  PAID: false,
  PENDING: false,
  DRAFT: false,
};

type Props = {
  invoices: Invoice[];
};

export const InvoiceList = ({ invoices }: Props) => {
  const [activeFilters, setActiveFilters] = useState(defaultFilters);
  const { width } = useWindowSize();

  const handleFilters = (key: Status, value: boolean) => {
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
      (invoice) => noFiltersActive || activeFilters[invoice.status as Status]
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
            onClick={() => {
              alert("COMING SOON !");
            }}
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
    </div>
  );
};