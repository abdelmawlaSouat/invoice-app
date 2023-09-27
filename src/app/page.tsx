"use client";

import { Navbar } from "@/components/navbar";
import styles from "./page.module.scss";
import { InvoiceOverviewCard } from "@/components/invoiceOverviewCard";
import invoices from "@/constants/invoices";
import { Typography } from "@/design-system/components";
import { FilterByStatus } from "@/components/FilterByStatus";
import { useState } from "react";
import { Status } from "@/components/statusTag";

const defaultFilters = {
  paid: false,
  pending: false,
  draft: false,
};

export default function Home() {
  const [activeFilters, setActiveFilters] = useState(defaultFilters);

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
      <InvoiceOverviewCard key={invoice.id} invoice={invoice} />
    ));

  return (
    <main className={styles.main}>
      <Navbar />

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

          <div>
            <FilterByStatus
              activeFilters={activeFilters}
              onChange={handleFilters}
            />

            {/* AddInvoice btn
            => HERE
            */}
          </div>
        </div>

        <div className={styles.invoicesWrapper}>{invoicesToDisplay}</div>
      </div>
    </main>
  );
}
