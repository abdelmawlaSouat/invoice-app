export type Invoice = {
  id: number;
  createdAt: Date;
  paymentDue: Date | null;
  status: string;
  description: string;
  total: number;
  products: {
    id: number;
    name: string;
    quantity: number;
    price: number;
    total: number;
    invoiceId: number;
  }[];
  client: {
    id: string;
    name: string;
    email: string;
    address: {
      id: number;
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
      id: number;
      street: string;
      city: string;
      postCode: string;
      country: string;
    };
  };
};
