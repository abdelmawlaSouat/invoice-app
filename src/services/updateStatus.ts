import { Status } from "@/components";
import { Invoice } from "@/types";
import { PrismaClient } from "@prisma/client";

export const updateStatus = async (id: number, newStatus: Status) => {
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
    console.log(error);
  } finally {
    return invoice;
  }
};
