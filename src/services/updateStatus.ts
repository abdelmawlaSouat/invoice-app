import { invoiceDataToSelectFromPrisma } from "@/constants/invoiceDataToSelectFromPrisma";
import { ResponseStatus, Invoice, InvoiceStatus } from "@/types";
import { PrismaClient } from "@prisma/client";

type UpdateStatusResponse = {
  invoice: Invoice;
  status: ResponseStatus;
};

export const updateStatus = async (
  id: number,
  newStatus: InvoiceStatus
): Promise<UpdateStatusResponse> => {
  let invoice = {} as Invoice;

  try {
    const prisma = new PrismaClient();

    invoice = await prisma.invoice.update({
      where: { id },
      data: { status: newStatus },
      select: invoiceDataToSelectFromPrisma,
    });

    return { status: "OK", invoice };
  } catch (error) {
    console.error(error);

    return { status: "KO", invoice };
  }
};
