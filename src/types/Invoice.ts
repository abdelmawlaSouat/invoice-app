import { Person } from "./Person";
import { Product } from "./Product";

export type Invoice = {
  id: number;
  createdAt: Date;
  paymentTerms: string;
  paymentDue: Date;
  status: string;
  description: string;
  total: number;
  products: Product[];
  client: Person;
  clientId: string;
  company: Person;
  companyId: string;
};
