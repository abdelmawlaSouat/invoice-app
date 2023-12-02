import { invoiceDataToSelectFromPrisma } from "@/constants/invoiceDataToSelectFromPrisma";
import { ResponseStatus, Invoice } from "@/types";
import { PrismaClient } from "@prisma/client";

type DeleteInvoiceResponse = {
  invoice: Invoice;
  status: ResponseStatus;
};

export const deleteInvoice = async (
  id: number
): Promise<DeleteInvoiceResponse> => {
  let invoice = {} as Invoice;

  try {
    const prisma = new PrismaClient();

    invoice = await prisma.invoice.update({
      where: { id },
      data: { status: "DELETED" },
      select: invoiceDataToSelectFromPrisma,
    });

    return { status: "OK", invoice };
  } catch (error) {
    console.error(error);

    return { status: "OK", invoice };
  }
};
