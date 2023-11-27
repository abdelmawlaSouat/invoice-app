import { Typography } from "@/design-system/components";
import { ProductInputGroup } from "../productInputGroup";
import styles from "./ProductInputList.module.scss";
import classNames from "classnames";
import { useFieldArray, useFormContext } from "react-hook-form";
import { IoMdAdd } from "react-icons/io";

export type ProductInputListProps = {
  className?: string;
};

export const ProductInputList = ({ className }: ProductInputListProps) => {
  const { getValues, setValue } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: "products",
  });

  const addNewItem = () =>
    append({
      name: "",
      quantity: 0,
      price: 0,
      total: 0,
    });

  const handleonRemoveItem = (index: number) => {
    const { total: totalProductPrice } = getValues(`products.${index}`);
    const { total } = getValues();
    const totalInvoicePrice = total - totalProductPrice;

    setValue("total", parseFloat(totalInvoicePrice.toFixed(2)));
    remove(index);
  };

  return (
    <div className={classNames(styles.wrapper, className)}>
      <Typography variant="body" className={styles.label}>
        Item List
      </Typography>

      {fields.map((field, index) => (
        <div className={styles.inputGroupWrapper} key={field.id}>
          <ProductInputGroup
            fieldName={`products.${index}`}
            onRemove={() => handleonRemoveItem(index)}
          />
        </div>
      ))}

      <button className={styles.addItemBtn} onClick={addNewItem}>
        <IoMdAdd />

        <Typography variant="body" tag="span">
          Add Item
        </Typography>
      </button>
    </div>
  );
};
