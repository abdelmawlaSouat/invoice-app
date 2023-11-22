import { InvoiceStatus, ResponseStatus } from "@/types";
import { PrismaClient } from "@prisma/client";

export type CreateInvoicePayload = {
  createdAt: Date;
  paymentTerms: string;
  paymentDue: Date;
  status: InvoiceStatus;
  description: string;
  total: number;
  products: {
    create: {
      name: string;
      quantity: number;
      price: number;
      total: number;
    };
  };
  client: {
    create: {
      name: string;
      email: string;
      address: {
        create: {
          street: string;
          city: string;
          postCode: string;
          country: string;
        };
      };
    };
  };
  company: {
    create: {
      name: string;
      email: string;
      address: {
        create: {
          street: string;
          city: string;
          postCode: string;
          country: string;
        };
      };
    };
  };
};

type CreateInvoiceResponse = {
  invoice: any;
  status: ResponseStatus;
};

export const createInvoice = async (
  data: CreateInvoicePayload
): Promise<CreateInvoiceResponse> => {
  let invoice = {};

  try {
    const prisma = new PrismaClient();

    invoice = await prisma.invoice.create({ data });

    return { status: "OK", invoice };
  } catch (error) {
    console.error(error);

    return { status: "KO", invoice };
  }
};
