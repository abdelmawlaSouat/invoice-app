import { createInvoice } from "@/services";
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
        where: { id: invoice.clientAddressID || "0" },
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
        where: { id: invoice.companyAddressID || "0" },
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
      create: invoice.products,
    },
    client: {
      connectOrCreate: {
        where: { email: invoice.clientEmail },
        create: clientData,
      },
    },
    company: {
      connectOrCreate: {
        where: { email: invoice.companyEmail },
        create: companyData,
      },
    },
  };

  try {
    const response = await createInvoice(formatedInvoice);

    return Response.json(response);
  } catch (error) {
    return new Response(`${error}`, { status: 500 });
  }
}
