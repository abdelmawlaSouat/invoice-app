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
    const {
      quantity,
      price,
      total: oldTotalProductPrice,
    } = getValues(fieldName);
    const { total } = getValues();

    const newTotalProductPrice = price * quantity;
    const totalInvoicePrice =
      total - oldTotalProductPrice + newTotalProductPrice;

    setValue(`${fieldName}.total`, Number(newTotalProductPrice.toFixed(2)));
    setValue("total", Number(totalInvoicePrice.toFixed(2)));
  };

  return (
    <div className={styles.wrapper}>
      <TextField label="Item Name" {...register(`${fieldName}.name`)} />

      <div className={styles.rowTwo}>
        <TextField
          type="number"
          className={styles.quantityInput}
          label="Qty."
          min={0}
          {...register(`${fieldName}.quantity`, {
            onChange: updateTotal,
            valueAsNumber: true,
          })}
        />

        <TextField
          type="number"
          className={styles.priceInput}
          step="0.01"
          min={0}
          label="Price"
          {...register(`${fieldName}.price`, {
            onChange: updateTotal,
            valueAsNumber: true,
          })}
        />

        <TextField
          type="number"
          className={styles.totalInput}
          step="0.01"
          min={0}
          label="Total"
          disabled
          {...register(`${fieldName}.total`, {
            valueAsNumber: true,
            deps: [`${fieldName}.quantity`, `${fieldName}.price`],
          })}
        />

        <button className={styles.deleteBtn} onClick={onRemove}>
          <MdOutlineDeleteOutline />
        </button>
      </div>
    </div>
  );
};
