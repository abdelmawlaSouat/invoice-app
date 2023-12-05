import { invoiceDataToSelectFromPrisma } from "@/constants/invoiceDataToSelectFromPrisma";
import {
  ResponseStatus,
  Invoice,
  InvoiceStatus,
  PrismaErrorType,
} from "@/types";
import { PrismaClient } from "@prisma/client";

type UpdateStatusResponse = {
  status: ResponseStatus;
  invoice?: Invoice;
  error?: string;
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
  } catch (error: any) {
    return { status: "KO", error: PrismaErrorType.UNKNOWN_ERROR };
  }
};
