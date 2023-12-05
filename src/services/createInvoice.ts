import { invoiceDataToSelectFromPrisma } from "@/constants/invoiceDataToSelectFromPrisma";
import {
  Invoice,
  InvoiceStatus,
  PrismaErrorType,
  ResponseStatus,
} from "@/types";
import { PrismaClient, Product } from "@prisma/client";

type CreateInvoicePayload = {
  createdAt: string;
  paymentTerms: string;
  paymentDue: Date;
  status: InvoiceStatus;
  description: string;
  total: number;
  products: {
    create: Product[];
  };
  client: {
    connectOrCreate: {
      where: {
        email: string;
        AND: object[];
      };
      create: {
        name: string;
        email: string;
        address: {
          connectOrCreate: {
            where: {
              street_city_postCode_country: {
                street: string;
                city: string;
                postCode: string;
                country: string;
              };
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
        AND: object[];
      };
      create: {
        name: string;
        email: string;
        address: {
          connectOrCreate: {
            where: {
              street_city_postCode_country: {
                street: string;
                city: string;
                postCode: string;
                country: string;
              };
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
  status: ResponseStatus;
  invoice?: Invoice;
  error?: string;
};

export const createInvoice = async (
  data: CreateInvoicePayload
): Promise<CreateInvoiceResponse> => {
  let invoice = {} as Invoice;

  try {
    const prisma = new PrismaClient();

    invoice = await prisma.invoice.create({
      data,
      select: invoiceDataToSelectFromPrisma,
    });

    return { status: "OK", invoice };
  } catch (error: any) {
    return {
      status: "KO",
      error: error.meta.target.includes("email")
        ? PrismaErrorType.EMAIL_ALREADY_EXISTS
        : PrismaErrorType.UNKNOWN_ERROR,
    };
  }
};
