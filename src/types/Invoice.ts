import { Person } from "./Person";
import { Product } from "./Product";

export type Invoice = {
  id: number;
  createdAt: Date;
  paymentTerms: string;
  paymentDue: Date;
  status: string;
  description: string | null;
  total: number;
  products: Product[];
  client: Person;
  company: Person;
};
