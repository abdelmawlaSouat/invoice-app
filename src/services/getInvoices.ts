import { Invoice } from "@/types";
import { PrismaClient } from "@prisma/client";

export const getInvoices = async () => {
  let invoices: Invoice[] = [];

  try {
    const prisma = new PrismaClient();

    invoices = await prisma.invoice.findMany({
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
  } finally {
    return invoices;
  }
};
