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
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { Invoice, PaymentTerms } from "@/types";
import { schema } from "./zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { StatusSelect } from "../statusSelect";
import { ProductInputList } from "../productInputList";

export type InvoiceFormProps = {
  invoice?: Invoice;
  onClose: () => void;
  onSubmit: SubmitHandler<FieldValues>;
};

export const InvoiceForm = ({
  invoice,
  onClose,
  onSubmit,
}: InvoiceFormProps) => {
  const {
    handleSubmit,
    register,
    control,
    formState,
    ...reactHookFormMethods
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: {
      creationDate: invoice?.createdAt || new Date(),
      companyName: invoice?.company.name,
      companyEmail: invoice?.company.email,
      companyStreet: invoice?.company.address.street,
      companyCity: invoice?.company.address.city,
      companyPostCode: invoice?.company.address.postCode,
      companyCountry: invoice?.company.address.country,
      clientName: invoice?.client.name,
      clientEmail: invoice?.client.email,
      clientStreet: invoice?.client.address.street,
      clientCity: invoice?.client.address.city,
      clientPostCode: invoice?.client.address.postCode,
      clientCountry: invoice?.client.address.country,
      projectDescription: invoice?.description,
      paymentTerms: invoice?.paymentTerms || PaymentTerms.Net_30_Days,
      status: invoice?.status || "DRAFT",
      products: invoice?.products.map(({ name, quantity, price, total }) => ({
        name,
        quantity,
        price,
        total,
      })),
    },
  });

  return (
    <FormProvider
      handleSubmit={handleSubmit}
      register={register}
      control={control}
      formState={formState}
      {...reactHookFormMethods}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.wrapper}
        tabIndex={0}
      >
        <div className={styles.section}>
          <Controller
            control={control}
            name="creationDate"
            render={({ field: { onChange, value, name } }) => (
              <DatePicker
                label="Invoice Date"
                onChange={onChange}
                value={value}
                name={name}
              />
            )}
          />

          <Controller
            control={control}
            name="paymentTerms"
            render={({ field: { onChange, value } }) => (
              <PaymentTermsSelect onChange={onChange} value={value} />
            )}
          />

          <Controller
            control={control}
            name="status"
            render={({ field: { onChange, value } }) => (
              <StatusSelect onChange={onChange} value={value} />
            )}
          />

          <TextField
            label="Project Description"
            {...register("projectDescription")}
          />
        </div>

        <div className={styles.section}>
          <Typography variant="body" className={styles.label}>
            Bill From
          </Typography>

          <TextField label="Company's Name" {...register("companyName")} />

          <TextField
            label="Company's Email"
            type="email"
            {...register("companyEmail")}
          />

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
            <TextField label="City" {...register("clientCity")} />

            <TextField label="Post Code" {...register("clientPostCode")} />
          </div>

          <TextField label="Country" {...register("clientCountry")} />
        </div>

        <ProductInputList className={styles.section} />

        <div className={styles.ctasWrapper}>
          <Button onClick={onClose}>Cancel</Button>

          <Button className={styles.submitBtn} type="submit">
            Save changes
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
