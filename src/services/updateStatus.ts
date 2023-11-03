import { Invoice, InvoiceStatus, ResponseStatus } from "@/types";
import { PrismaClient } from "@prisma/client";

type UpdateStatusResponse = {
  invoice: Invoice;
  status: ResponseStatus;
};

export const updateStatus = async (
  id: number,
  newStatus: InvoiceStatus,
): Promise<UpdateStatusResponse> => {
  let invoice: Invoice = {} as Invoice;

  try {
    const prisma = new PrismaClient();

    invoice = await prisma.invoice.update({
      where: {
        id,
      },
      data: {
        status: newStatus,
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

    return { status: "KO", invoice };
  }
};
