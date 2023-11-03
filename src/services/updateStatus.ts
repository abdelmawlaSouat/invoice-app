import { Invoice, InvoiceStatus } from "@/types";
import { PrismaClient } from "@prisma/client";

export const updateStatus = async (id: number, newStatus: InvoiceStatus) => {
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
  } catch (error) {
    console.error(error);
  } finally {
    return invoice;
  }
};
