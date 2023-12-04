import { invoiceDataToSelectFromPrisma } from "@/constants/invoiceDataToSelectFromPrisma";
import { InvoiceStatus, ResponseStatus, Invoice, Product } from "@/types";
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
  invoice: Invoice;
  status: ResponseStatus;
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
  } catch (error) {
    console.error(error);

    return { status: "KO", invoice };
  }
};
