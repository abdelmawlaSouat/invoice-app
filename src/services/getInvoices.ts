import { Invoice, ResponseStatus } from "@/types";
import { PrismaClient } from "@prisma/client";

type GetInvoicesResponse = {
  invoices: Invoice[];
  status: ResponseStatus;
};

export const getInvoices = async (): Promise<GetInvoicesResponse> => {
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

    return { status: "OK", invoices };
  } catch (error) {
    console.error(error);

    return { status: "KO", invoices };
  }
};
