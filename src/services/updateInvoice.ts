import { invoiceDataToSelectFromPrisma } from "@/constants/invoiceDataToSelectFromPrisma";
import {
  InvoiceStatus,
  ResponseStatus,
  Invoice,
  Product,
  PrismaErrorType,
} from "@/types";
import { PrismaClient } from "@prisma/client";

export type UpdateInvoicePayload = {
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
        email_name_addressId: {
          email: string;
          name: string;
          addressId: string;
        };
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
        email_name_addressId: {
          email: string;
          name: string;
          addressId: string;
        };
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

type UpdateInvoiceResponse = {
  status: ResponseStatus;
  invoice?: Invoice;
  error?: string;
};

export const updateInvoice = async (
  invoiceId: number,
  data: UpdateInvoicePayload
): Promise<UpdateInvoiceResponse> => {
  let invoice = {} as Invoice;

  try {
    const prisma = new PrismaClient();

    invoice = await prisma.invoice.update({
      where: { id: invoiceId },
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
