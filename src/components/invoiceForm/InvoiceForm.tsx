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
import { Invoice, PaymentTerms, Person } from "@/types";
import { schema } from "./zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { StatusSelect } from "../statusSelect";
import { ProductInputList } from "../productInputList";
import { useState } from "react";
import { ConfirmFillDataModal } from "../confirmFillDataModal";

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
    setError,
    setValue,
    control,
    formState,
    ...reactHookFormMethods
  } = useForm({
    resolver: zodResolver(schema),
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
      total: invoice?.total || 0,
    },
  });

  const [modalState, setModalState] = useState({
    isOpened: false,
    personType: "",
    data: null,
  });

  const setValuesBasedOnThePersonType = (
    type: "company" | "client",
    data: Person | null
  ) => {
    if (!data) {
      return;
    }

    setValue(`${type}Name`, data.name);
    setValue(`${type}Email`, data.email);
    setValue(`${type}Street`, data.address.street);
    setValue(`${type}City`, data.address.city);
    setValue(`${type}PostCode`, data.address.postCode);
    setValue(`${type}Country`, data.address.country);
  };

  const onModalConfirm = () => {
    setValuesBasedOnThePersonType(
      modalState.personType as "company" | "client",
      modalState.data
    );

    setModalState({
      ...modalState,
      isOpened: false,
      data: null,
      personType: "",
    });
  };

  const onModalClose = () => setModalState({ ...modalState, isOpened: false });

  const onInputBlur = async (
    event: React.FocusEvent<HTMLInputElement>,
    personType: "company" | "client"
  ) => {
    const res = await fetch(
      `/api/check-person-existence?type=${personType}&value=${event.target.value}`
    );

    const { data } = await res.json();

    if (data) {
      setModalState({
        isOpened: true,
        personType,
        data,
      });
    }
  };

  return (
    <FormProvider
      handleSubmit={handleSubmit}
      register={register}
      setError={setError}
      setValue={setValue}
      control={control}
      formState={formState}
      {...reactHookFormMethods}
    >
      <form onSubmit={handleSubmit(onSubmit)} tabIndex={0}>
        <div className={styles.generalInfosection}>
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

        <div className={styles.contactDataSection}>
          <Typography variant="body" className={styles.label}>
            Bill From
          </Typography>

          <div className={styles.inputsGroup}>
            <TextField
              label="Company's Email"
              type="email"
              {...register("companyEmail", {
                onBlur: (event) => onInputBlur(event, "company"),
              })}
            />

            <TextField label="Company's Name" {...register("companyName")} />

            <div className={styles.addressGroup}>
              <TextField
                label="Street Address"
                {...register("companyStreet")}
              />

              <div className={styles.addressSubGroup}>
                <TextField label="City" {...register("companyCity")} />

                <TextField label="Post Code" {...register("companyPostCode")} />

                <TextField label="Country" {...register("companyCountry")} />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.contactDataSection}>
          <Typography variant="body" className={styles.label}>
            Bill To
          </Typography>

          <div className={styles.inputsGroup}>
            <TextField
              label="Client's Email"
              type="email"
              {...register("clientEmail", {
                onBlur: (event) => onInputBlur(event, "client"),
              })}
            />

            <TextField label="Client's Name" {...register("clientName")} />

            <div className={styles.addressGroup}>
              <TextField label="Street Address" {...register("clientStreet")} />

              <div className={styles.addressSubGroup}>
                <TextField label="City" {...register("clientCity")} />

                <TextField label="Post Code" {...register("clientPostCode")} />

                <TextField label="Country" {...register("clientCountry")} />
              </div>
            </div>
          </div>
        </div>

        <ProductInputList className={styles.productListSection} />

        <input type="hidden" {...register("total", { valueAsNumber: true })} />

        <div className={styles.ctasWrapper}>
          <Button onClick={onClose}>Cancel</Button>

          <Button className={styles.submitBtn} type="submit">
            Save changes
          </Button>
        </div>
      </form>

      <ConfirmFillDataModal
        open={modalState.isOpened}
        personType={modalState.personType}
        onClose={onModalClose}
        onConfirm={onModalConfirm}
      />
    </FormProvider>
  );
};
