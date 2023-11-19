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
import { Invoice } from "@/types";
import { schema } from "./zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Select } from "@/design-system/components/select";
import { StatusSelect } from "../statusSelect";
import { ProductInputGroup } from "../productInputGroup";
import classNames from "classnames";
import { ProductInputList } from "../productInputList";

export type InvoiceFormProps = {
  invoice?: Invoice;
  onClose: () => void;
};

export const InvoiceForm = ({ invoice, onClose }: InvoiceFormProps) => {
  const {
    handleSubmit,
    register,
    control,
    formState,
    ...reactHookFormMethods
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      creationDate: invoice?.createdAt || "",
      companyStreet: invoice?.company.address.street || "",
      companyCity: invoice?.company.address.city || "",
      companyPostCode: invoice?.company.address.postCode || "",
      companyCountry: invoice?.company.address.country || "",
      clientName: invoice?.client.name || "",
      clientEmail: invoice?.client.email || "",
      clientStreet: invoice?.client.address.street || "",
      clientCity: invoice?.client.address.city || "",
      clientPostCode: invoice?.client.address.postCode || "",
      clientCountry: invoice?.client.address.country || "",
      projectDescription: invoice?.description || "",
      paymentTerms: "",
      status: invoice?.status || "",
      products: invoice?.products.map(({ name, quantity, price, total }) => ({
        name,
        quantity,
        price,
        total,
      })),
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);

  return (
    <FormProvider
      handleSubmit={handleSubmit}
      register={register}
      control={control}
      formState={formState}
      {...reactHookFormMethods}
    >
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
            <TextField label="City" {...register("clientCity")} />

            <TextField label="Post Code" {...register("clientPostCode")} />
          </div>

          <TextField label="Country" {...register("clientCountry")} />
        </div>

        <div className={styles.section}>
          <Controller
            control={control}
            name="creationDate"
            render={({ field: { onChange, value } }) => (
              <DatePicker
                label="Invoice Date"
                onChange={onChange}
                value={value as Date}
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
