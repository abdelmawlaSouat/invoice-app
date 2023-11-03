import { Person } from "./Person";
import { Product } from "./Product";

export type Invoice = {
  id: number;
  createdAt: Date;
  paymentDue: Date;
  status: string;
  description: string;
  total: number;
  products: Product[];
  client: Person;
  company: Person;
};
