import { z } from "zod";

export const schema = z.object({
  creationDate: z.date(),
  companyName: z.string().min(2, { message: "The company name is required" }),
  companyEmail: z
    .string()
    .min(1, { message: "The company email is required" })
    .email({
      message: "Must be a valid email",
    }),
  companyStreet: z.string(),
  companyCity: z.string(),
  companyPostCode: z.string(),
  companyCountry: z.string(),
  clientName: z.string().min(2, { message: "The client name is required" }),
  clientEmail: z
    .string()
    .min(1, { message: "The client email is required" })
    .email({
      message: "Must be a valid email",
    }),
  clientStreet: z.string(),
  clientCity: z.string(),
  clientPostCode: z.string(),
  clientCountry: z.string(),
  projectDescription: z.string(),
  paymentTerms: z.string().min(1),
  status: z.string().min(2),
  products: z.array(
    z.object({
      name: z.string(),
      quantity: z.coerce.number(),
      price: z.coerce.number(),
      total: z.coerce.number(),
    })
  ),
});
