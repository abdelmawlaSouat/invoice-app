import {
  Button,
  DatePicker,
  TextField,
  Typography,
} from "@/design-system/components";
import styles from "./InvoiceForm.module.scss";
import { PaymentTermsSelect } from "../paymentTermsSelect";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { Invoice } from "@/types";
import { schema } from "./zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";

// type Inputs = {
//   example: string;
//   exampleRequired: string;
// };

export type InvoiceFormProps = {
  invoice?: Invoice;
  // onSubmit?: SubmitHandler<Inputs>;
};

export const InvoiceForm = ({
  invoice, // onSubmit = (data) => console.log(data),
}: InvoiceFormProps) => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      creationDate: invoice?.createdAt ?? "",
      companyStreet: invoice?.company.address.street ?? "",
      companyCity: invoice?.company.address.city ?? "",
      companyPostCode: invoice?.company.address.postCode ?? "",
      companyCountry: invoice?.company.address.country ?? "",
      clientName: invoice?.client.name ?? "",
      clientEmail: invoice?.client.email ?? "",
      clientStreet: invoice?.client.address.street ?? "",
      clientCity: invoice?.client.address.city ?? "",
      clientPostCode: invoice?.client.address.postCode ?? "",
      clientCountry: invoice?.client.address.country ?? "",
      projectDescription: invoice?.description ?? "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);

  console.log("Errors", errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)} tabIndex={0}>
      <div className={styles.section}>
        <Typography variant="body" className={styles.label}>
          Bill From
        </Typography>

        <TextField label="Street Address" {...register("companyStreet")} />

        <div className={styles.row}>
          <TextField label="City" {...register("companyCity")} />

          <TextField label="Post Code" {...register("companyPostCode")} />
        </div>

        <TextField label="Country" {...register("companyCountry")} />
      </div>

      <div className={styles.section}>
        <Typography variant="body" className={styles.label}>
          Bill To
        </Typography>

        <TextField label="Client's Name" {...register("clientName")} />

        <TextField
          label="Client's Email"
          type="email"
          {...register("clientEmail")}
        />

        <TextField label="Street Address" {...register("clientStreet")} />

        <div className={styles.row}>
          <TextField
            label="City"
            {...register("clientCity")}
            defaultValue={invoice?.client.address.city ?? ""}
          />

          <TextField
            label="Post Code"
            {...register("clientPostCode")}
            defaultValue={invoice?.client.address.postCode ?? ""}
          />
        </div>

        <TextField
          label="Country"
          {...register("clientCountry")}
          defaultValue={invoice?.client.address.country ?? ""}
        />
      </div>

      <div className={styles.section}>
        <Controller
          control={control}
          name="creationDate"
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <DatePicker
              label="Invoice Date"
              onChange={onChange}
              value={value as Date}
            />
          )}
        />

        <PaymentTermsSelect />

        <TextField
          label="Project Description"
          defaultValue={invoice?.description ?? ""}
          {...register("projectDescription")}
        />
      </div>

      <Button type="submit">SEND</Button>
    </form>
  );
};
