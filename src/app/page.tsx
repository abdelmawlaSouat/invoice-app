import styles from "./page.module.scss";
import { InvoiceList } from "@/components/invoiceList";
import { getInvoices } from "@/services";

export default async function Home() {
  const invoices = await getInvoices();

  return (
    <main className={styles.main}>
      <InvoiceList invoices={invoices} />
    </main>
  );
}
