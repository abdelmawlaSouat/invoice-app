import { ResponseStatus, Invoice } from "@/types";
import { PrismaClient } from "@prisma/client";

type GetInvoiceByIDResponse = {
  invoice: Invoice | null;
  status: ResponseStatus;
};

export const getInvoiceByID = async (
  id: number
): Promise<GetInvoiceByIDResponse> => {
  try {
    const prisma = new PrismaClient();

    const invoice = await prisma.invoice.findUnique({
      where: { id },
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

    if (!invoice) {
      throw new Error("Invoice not found");
    }

    return { status: "OK", invoice: invoice as Invoice };
  } catch (error) {
    console.error(error);

    return { status: "KO", invoice: null };
  }
};
