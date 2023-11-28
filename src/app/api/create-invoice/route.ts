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
      create: invoice.products,
    },
    client: {
      connectOrCreate: {
        where: {
          email: invoice.clientEmail,
          AND: [
            {
              name: invoice.clientName,
            },
            {
              address: {
                street: invoice.clientStreet,
                city: invoice.clientCity,
                postCode: invoice.clientPostCode,
                country: invoice.clientCountry,
              },
            },
          ],
        },

        create: clientData,
      },
    },
    company: {
      connectOrCreate: {
        where: {
          email: invoice.companyEmail,
          AND: [
            {
              name: invoice.companyName,
            },
            {
              address: {
                street: invoice.companyStreet,
                city: invoice.companyCity,
                postCode: invoice.companyPostCode,
                country: invoice.companyCountry,
              },
            },
          ],
        },
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
