import { z } from "zod";

export const schema = z.object({
  creationDate: z.date(),
  companyName: z.string(),
  companyEmail: z.string(),
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
  products: z.array(
    z.object({
      name: z.string(),
      quantity: z.coerce.number(),
      price: z.coerce.number(),
      total: z.coerce.number(),
    })
  ),
});
