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
    connectOrCreate: {
      where: {
        email: string;
      };
      create: {
        name: string;
        email: string;
        address: {
          connectOrCreate: {
            where: {
              id: string;
            };
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
  };
  company: {
    connectOrCreate: {
      where: {
        email: string;
      };
      create: {
        name: string;
        email: string;
        address: {
          connectOrCreate: {
            where: {
              id: string;
            };
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
  };
};

type CreateInvoiceResponse = {
  invoice: unknown;
  status: ResponseStatus;
};

export const createInvoice = async (
  data: CreateInvoicePayload
): Promise<CreateInvoiceResponse> => {
  let invoice = {};

  try {
    const prisma = new PrismaClient();

    invoice = await prisma.invoice.create({
      data,
    });

    return { status: "OK", invoice };
  } catch (error) {
    console.error(error);

    return { status: "KO", invoice };
  }
};
