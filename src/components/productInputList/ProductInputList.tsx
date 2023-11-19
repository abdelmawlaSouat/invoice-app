import { Button, Typography } from "@/design-system/components";
import { ProductInputGroup } from "../productInputGroup";
import styles from "./ProductInputList.module.scss";
import classNames from "classnames";
import { useFieldArray } from "react-hook-form";

export type ProductInputListProps = {
  className?: string;
};

export const ProductInputList = ({ className }: ProductInputListProps) => {
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

  return (
    <div className={classNames(styles.wrapper, className)}>
      <Typography variant="body" className={styles.label}>
        Item List
      </Typography>

      {fields.map((field, index) => (
        <ProductInputGroup
          key={field.id}
          fieldName={`products.${index}`}
          onRemove={() => remove(index)}
        />
      ))}

      <Button onClick={addNewItem}>Add New Item</Button>
    </div>
  );
};
