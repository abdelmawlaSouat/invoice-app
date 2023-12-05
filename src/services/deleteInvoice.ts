import { invoiceDataToSelectFromPrisma } from "@/constants/invoiceDataToSelectFromPrisma";
import { ResponseStatus, Invoice, PrismaErrorType } from "@/types";
import { PrismaClient } from "@prisma/client";

type DeleteInvoiceResponse = {
  status: ResponseStatus;
  invoice?: Invoice;
  error?: string;
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
  } catch (error: any) {
    return { status: "KO", error: PrismaErrorType.UNKNOWN_ERROR };
  }
};
