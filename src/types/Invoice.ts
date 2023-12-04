import { Person } from "./Person";
import { Product } from "./Product";

export type Invoice = {
  id: number;
  createdAt: Date | string;
  paymentTerms: string;
  paymentDue: Date;
  status: string;
  description: string | null;
  total: number;
  products: Product[];
  client: Person;
  clientId?: string;
  company: Person;
  companyId?: string;
};
