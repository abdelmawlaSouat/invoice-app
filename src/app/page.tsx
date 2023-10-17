"use client";

import styles from "./page.module.scss";
import { InvoiceOverviewCard } from "@/components/invoiceOverviewCard";
import invoices from "@/constants/invoices";
import { Button, Typography } from "@/design-system/components";
import { FilterByStatus } from "@/components/FilterByStatus";
import { useState } from "react";
import { Status } from "@/components/statusTag";
import { EmptyListMessage } from "@/components/emptyListMessage";
import { Add } from "@/design-system/icons";
import { BREAKPOINTS } from "@/design-system/styles/breakpoints";
import { useWindowSize } from "@/design-system/hooks";
import Link from "next/link";

const defaultFilters = {
  paid: false,
  pending: false,
  draft: false,
};

export default function Home() {
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
        href={`/invoice/${invoice.id}`}
        key={invoice.id}
        className={styles.invoiceWrapperLink}
      >
        <InvoiceOverviewCard invoice={invoice} />
      </Link>
    ));

  return (
    <main className={styles.main}>
      <div className={styles.content}>
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
    </main>
  );
}
