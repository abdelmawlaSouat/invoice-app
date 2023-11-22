import { createInvoice } from "@/services";
import { addDaysToDate } from "@/utils";

export async function POST(request: Request) {
  const invoice = await request.json();

  const paymentDue = addDaysToDate(
    invoice.creationDate,
    parseInt(invoice.paymentTerms)
  );

  const formatedInvoice = {
    createdAt: invoice.creationDate,
    paymentTerms: invoice.paymentTerms,
    paymentDue,
    status: invoice.status,
    description: invoice.projectDescription,
    total: invoice.total || 0,
    products: { create: invoice.products },
    client: {
      create: {
        name: invoice.clientName,
        email: invoice.clientEmail,
        address: {
          create: {
            street: invoice.clientStreet,
            city: invoice.clientCity,
            postCode: invoice.clientPostCode,
            country: invoice.clientCountry,
          },
        },
      },
    },
    company: {
      create: {
        name: invoice.companyName,
        email: invoice.companyEmail,
        address: {
          create: {
            street: invoice.companyStreet,
            city: invoice.companyCity,
            postCode: invoice.companyPostCode,
            country: invoice.companyCountry,
          },
        },
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
