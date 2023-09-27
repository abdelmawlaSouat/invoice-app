import { Navbar } from "@/components/navbar";
import styles from "./page.module.scss";
import { InvoiceOverviewCard } from "@/components/invoiceOverviewCard";
import invoices from "@/constants/invoices";
import { Typography } from "@/design-system/components";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />

      <div className={styles.content}>
        <div>
          <div>
            <Typography variant="headingL" tag="h1" className={styles.title}>
              Invoices
            </Typography>
            <Typography variant="body" className={styles.invoicesLength}>
              {invoices.length} invoices
            </Typography>
          </div>

          <div>
            {/* Filter component */}

            {/* AddInvoice btn */}
          </div>
        </div>

        <div className={styles.invoicesWrapper}>
          {invoices.map((invoice) => (
            <InvoiceOverviewCard key={invoice.id} invoice={invoice} />
          ))}
        </div>
      </div>
    </main>
  );
}
