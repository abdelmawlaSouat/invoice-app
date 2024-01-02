import styles from "./page.module.scss";
import { InvoiceList } from "@/components";
import { headers } from "next/headers";

async function getData() {
  const host = headers().get("host");
  const protocal = process?.env.NODE_ENV === "development" ? "http" : "https";

  let res = await fetch(`${protocal}://${host}/api/get-invoices`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const { invoices } = await getData();

  return (
    <main className={styles.main}>
      <InvoiceList invoices={invoices} />
    </main>
  );
}
