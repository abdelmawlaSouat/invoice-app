import { Invoice, ResponseStatus } from "@/types";
import { PrismaClient } from "@prisma/client";

type DeleteInvoiceResponse = {
  invoice: Invoice;
  status: ResponseStatus;
};

export const deleteInvoice = async (
  id: number,
): Promise<DeleteInvoiceResponse> => {
  let invoice: Invoice = {} as Invoice;

  try {
    const prisma = new PrismaClient();

    invoice = await prisma.invoice.update({
      where: {
        id,
      },
      data: {
        status: "DELETED",
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

    return { status: "OK", invoice };
  } catch (error) {
    console.error(error);

    return { status: "OK", invoice };
  }
};
