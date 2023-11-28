import { z } from "zod";

const emptyMessage = "cannot be empty";

export const schema = z.object({
  creationDate: z.date({
    invalid_type_error: "must be a valid date",
  }),
  companyName: z.string().min(2, { message: emptyMessage }),
  companyEmail: z.string().min(1, { message: emptyMessage }).email({
    message: "must be a valid email",
  }),
  companyStreet: z.string(),
  companyCity: z.string(),
  companyPostCode: z.string(),
  companyCountry: z.string(),
  clientName: z.string().min(2, { message: emptyMessage }),
  clientEmail: z.string().min(1, { message: emptyMessage }).email({
    message: "must be a valid email",
  }),
  clientStreet: z.string(),
  clientCity: z.string(),
  clientPostCode: z.string(),
  clientCountry: z.string(),
  projectDescription: z.string(),
  paymentTerms: z.string(),
  status: z.string(),
  total: z.number(),
  products: z.array(
    z.object({
      name: z.string(),
      quantity: z.coerce.number(),
      price: z.coerce.number(),
      total: z.coerce.number(),
    })
  ),
});
