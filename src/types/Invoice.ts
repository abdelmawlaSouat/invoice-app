export type Invoice = {
  id: string;
  createdAt: string;
  paymentDue: string;
  status: string;
  description: string;
  total: number;

  products: {
    id: number;
    name: string;
    quantity: number;
    price: number;
    total: number;
    invoiceId: string;
  }[];

  client: {
    id: string;
    name: string;
    email: string;
    address: {
      id: string;
      street: string;
      city: string;
      postCode: string;
      country: string;
    };
  };

  company: {
    id: string;
    name: string;
    email: string;
    address: {
      id: string;
      street: string;
      city: string;
      postCode: string;
      country: string;
    };
  };
};
