import Invoice from "./invoice";
import { getInvoiceByID, getInvoices } from "@/services";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const { invoices } = await getInvoices();

  return invoices.map(({ id }) => ({
    id: id.toString(),
  }));
}

type Props = { params: { id: string } };

export default async function Page({ params }: Props) {
  const { invoice, status } = await getInvoiceByID(parseInt(params.id));

  if (status === "KO" || !invoice) {
    notFound();
  }

  return <Invoice invoice={invoice} />;
}
