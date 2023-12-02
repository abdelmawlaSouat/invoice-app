export const invoiceDataToSelectFromPrisma = {
  id: true,
  createdAt: true,
  paymentTerms: true,
  paymentDue: true,
  status: true,
  description: true,
  total: true,
  products: {
    select: {
      id: true,
      name: true,
      quantity: true,
      price: true,
      total: true,
    },
  },
  client: {
    select: {
      id: true,
      name: true,
      email: true,
      address: {
        select: {
          id: true,
          street: true,
          city: true,
          postCode: true,
          country: true,
        },
      },
    },
  },
  company: {
    select: {
      id: true,
      name: true,
      email: true,
      address: {
        select: {
          id: true,
          street: true,
          city: true,
          postCode: true,
          country: true,
        },
      },
    },
  },
};
