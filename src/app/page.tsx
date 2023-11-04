import styles from "./page.module.scss";
import { getInvoices } from "@/services";
import { InvoiceList } from "@/components";
import { notFound } from "next/navigation";

export default async function Home() {
  const { status, invoices } = await getInvoices();

  if (status === "KO") {
    notFound();
  }

  return (
    <main className={styles.main}>
      <InvoiceList invoices={invoices} />
    </main>
  );
}
