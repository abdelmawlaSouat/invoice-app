import { Invoice as InvoiceType } from "@/types";
import Invoice from "./invoice";
import { PrismaClient } from "@prisma/client";
import { getInvoices } from "@/services";

export async function generateStaticParams() {
  const invoices = await getInvoices();

  return invoices.map(({ id }) => ({
    id: id.toString(),
  }));
}

type Props = { params: { id: string } };

export default async function Page({ params }: Props) {
  const prisma = new PrismaClient();

  const invoice = await prisma.invoice.findUnique({
    where: {
      id: parseInt(params.id),
    },
    include: {
      products: true,
      company: {
        include: {
          address: true,
        },
      },
      client: {
        include: {
          address: true,
        },
      },
    },
  });

  return <Invoice invoice={invoice as InvoiceType} />;
}
