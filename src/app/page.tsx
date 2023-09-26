import { Navbar } from "@/components/navbar";
import styles from "./page.module.scss";
import { InvoiceOverviewCard } from "@/components/invoiceOverviewCard";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />

      <div className={styles.invoicesWrapper}>
        <InvoiceOverviewCard
          invoice={{
            id: "RT3080",
            dueDate: "2021-08-19",
            customer: "Jensen Huang",
            amount: 1800,
            status: "paid",
          }}
        />

        <InvoiceOverviewCard
          invoice={{
            id: "RT3080",
            dueDate: "2021-08-19",
            customer: "Jensen Huang",
            amount: 1800,
            status: "pending",
          }}
        />

        <InvoiceOverviewCard
          invoice={{
            id: "RT3080",
            dueDate: "2021-08-19",
            customer: "Jensen Huang",
            amount: 1800,
            status: "draft",
          }}
        />
      </div>
    </main>
  );
}
