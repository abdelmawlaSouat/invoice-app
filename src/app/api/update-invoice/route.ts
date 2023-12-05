import { ErrorMessages } from "@/constants/errorMessages";
import { updateInvoice } from "@/services";
import { PrismaErrorType } from "@/types";
import { addDaysToDate } from "@/utils";

export async function POST(request: Request) {
  const invoice = await request.json();

  const paymentDue = addDaysToDate(
    invoice.creationDate,
    parseInt(invoice.paymentTerms)
  );

  const clientAddress = {
    street: invoice.clientStreet,
    city: invoice.clientCity,
    postCode: invoice.clientPostCode,
    country: invoice.clientCountry,
  };

  const clientData = {
    name: invoice.clientName,
    email: invoice.clientEmail,
    address: {
      connectOrCreate: {
        where: {
          street_city_postCode_country: {
            street: clientAddress.street,
            city: clientAddress.city,
            postCode: clientAddress.postCode,
            country: clientAddress.country,
          },
        },
        create: clientAddress,
      },
    },
  };

  const companyAddress = {
    street: invoice.companyStreet,
    city: invoice.companyCity,
    postCode: invoice.companyPostCode,
    country: invoice.companyCountry,
  };

  const companyData = {
    name: invoice.companyName,
    email: invoice.companyEmail,
    address: {
      connectOrCreate: {
        where: {
          street_city_postCode_country: {
            street: companyAddress.street,
            city: companyAddress.city,
            postCode: companyAddress.postCode,
            country: companyAddress.country,
          },
        },
        create: companyAddress,
      },
    },
  };

  const formatedInvoice = {
    createdAt: invoice.creationDate,
    paymentTerms: invoice.paymentTerms,
    paymentDue,
    status: invoice.status,
    description: invoice.projectDescription,
    total: parseFloat(invoice.total) || 0,
    products: {
      deleteMany: {},
      create: invoice.products,
    },
    client: {
      connectOrCreate: {
        where: {
          email_name_addressId: {
            email: clientData.email,
            name: clientData.name,
            addressId: invoice.clientAddressID,
          },
        },
        create: clientData,
      },
    },
    company: {
      connectOrCreate: {
        where: {
          email_name_addressId: {
            email: companyData.email,
            name: companyData.name,
            addressId: invoice.companyAddressID,
          },
        },
        create: companyData,
      },
    },
  };

  try {
    const response = await updateInvoice(invoice.id, formatedInvoice);

    if (response.status === "KO") {
      throw new Error(response.error);
    }

    return Response.json(response.invoice, { status: 200 });
  } catch (error: any) {
    if (error.message === PrismaErrorType.EMAIL_ALREADY_EXISTS) {
      return Response.json(
        { error: ErrorMessages.email_already_exists },
        { status: ErrorMessages.email_already_exists.status }
      );
    }

    return new Response(`${error}`, {
      status: ErrorMessages.unknown_error.status,
    });
  }
}
