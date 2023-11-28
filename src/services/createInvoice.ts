import { InvoiceStatus, ResponseStatus } from "@/types";
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
