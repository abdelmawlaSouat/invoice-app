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
  const [isInitialList, setIsInitialList] = useState(true);
  const [activeFilters, setActiveFilters] = useState(defaultFilters);

  const handleFilters = (key: Status, value: boolean) => {
    if (isInitialList) {
      setIsInitialList(false);
    }

    setActiveFilters({
      ...activeFilters,
      [key]: value,
    });
  };

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
              {invoices.length} invoices
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

        <div className={styles.invoicesWrapper}>
          {invoices
            .filter(
              (invoice) =>
                isInitialList || activeFilters[invoice.status as Status]
            )
            .map((invoice) => (
              <InvoiceOverviewCard key={invoice.id} invoice={invoice} />
            ))}
        </div>
      </div>
    </main>
  );
}
