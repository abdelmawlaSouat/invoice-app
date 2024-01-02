import Invoice from "./invoice";
import { getInvoices } from "@/services";
import { headers } from "next/headers";

export async function generateStaticParams() {
  const { invoices } = await getInvoices();

  return invoices.map(({ id }) => ({
    id: id.toString(),
  }));
}

async function getData(id: number) {
  const host = headers().get("host");
  const protocal = process?.env.NODE_ENV === "development" ? "http" : "https";

  let res = await fetch(
    `${protocal}://${host}/api/get-invoice-by-id?id=${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch the invoice");
  }

  return res.json();
}

type Props = { params: { id: string } };

export default async function Page({ params }: Props) {
  const { invoice } = await getData(parseInt(params.id));

  return <Invoice invoice={invoice} />;
}
