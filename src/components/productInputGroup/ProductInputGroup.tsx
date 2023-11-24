import { TextField } from "@/design-system/components";
import { useFormContext } from "react-hook-form";
import { MdOutlineDeleteOutline } from "react-icons/md";
import styles from "./ProductInputGroup.module.scss";

export type ProductInputGroupProps = {
  fieldName: string;
  onRemove: () => void;
};

export const ProductInputGroup = ({
  fieldName,
  onRemove,
}: ProductInputGroupProps) => {
  const { register, getValues, setValue } = useFormContext();

  const updateTotal = () => {
    const { quantity, price } = getValues(fieldName);
    const { total } = getValues();

    const totalProductPrice = quantity * price;

    const totalInvoicePrice = parseInt(total) + totalProductPrice;

    setValue(`${fieldName}.total`, totalProductPrice);
    setValue("total", totalInvoicePrice.toString());
  };

  return (
    <div className={styles.wrapper}>
      <TextField label="Item Name" {...register(`${fieldName}.name`)} />

      <div className={styles.rowTwo}>
        <TextField
          type="number"
          className={styles.quantityInput}
          label="Qty."
          {...register(`${fieldName}.quantity`, {
            onChange: updateTotal,
          })}
        />

        <TextField
          type="number"
          className={styles.priceInput}
          step="0.01"
          label="Price"
          {...register(`${fieldName}.price`, {
            onChange: updateTotal,
          })}
        />

        <TextField
          type="number"
          className={styles.totalInput}
          step="0.01"
          label="Total"
          disabled
          {...register(`${fieldName}.total`)}
        />

        <button className={styles.deleteBtn} onClick={onRemove}>
          <MdOutlineDeleteOutline />
        </button>
      </div>
    </div>
  );
};
