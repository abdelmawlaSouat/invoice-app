import invoices from "@/constants/invoices";
import { Invoice as InvoiceType } from "@/types";
import Invoice from "./invoice";

export function generateStaticParams() {
  return invoices.map(({ id }) => ({
    id,
  }));
}

type Props = { params: { id: string } };

export default function Page({ params }: Props) {
  const invoice = invoices.find((invoice) => invoice.id === params.id);

  return <Invoice invoice={invoice as InvoiceType} />;
}
