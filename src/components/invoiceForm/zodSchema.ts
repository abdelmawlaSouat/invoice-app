import { z } from "zod";

export const schema = z.object({
  creationDate: z.date(),
  companyStreet: z.string(),
  companyCity: z.string(),
  companyPostCode: z.string(),
  companyCountry: z.string(),
  clientName: z.string(),
  clientEmail: z.string(),
  clientStreet: z.string(),
  clientCity: z.string(),
  clientPostCode: z.string(),
  clientCountry: z.string(),
  projectDescription: z.string(),
  paymentTerms: z.string(),
  status: z.string(),
});
