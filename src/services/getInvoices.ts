import { ResponseStatus, Invoice } from "@/types";
import { PrismaClient } from "@prisma/client";

type GetInvoicesResponse = {
  invoices: Invoice[];
  status: ResponseStatus;
};

export const getInvoices = async (): Promise<GetInvoicesResponse> => {
  try {
    const prisma = new PrismaClient();

    const invoices = await prisma.invoice.findMany({
      where: {
        status: {
          not: "DELETED",
        },
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

    return { status: "OK", invoices: invoices as Invoice[] };
  } catch (error) {
    console.error(error);

    return { status: "KO", invoices: [] };
  }
};
