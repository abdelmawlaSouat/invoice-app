import { Card, Typography } from "@/design-system/components";
import styles from "./DesktopItemsCard.module.scss";

export type Item = {
  name: string;
  quantity: number;
  price: number;
  total: number;
};

export const DesktopItemsCard = ({
  items,
  total,
}: {
  items: Item[];
  total: number;
}) => {
  return (
    <Card className={styles.itemsCard}>
      <div className={styles.itemWrapper}>
        <Typography className={styles.label} variant="label">
          Description
        </Typography>

        <Typography className={styles.label} variant="label">
          QTY.
        </Typography>

        <Typography className={styles.label} variant="label">
          Price
        </Typography>

        <Typography className={styles.label} variant="label">
          Total
        </Typography>
      </div>

      {items.map((item) => (
        <div className={styles.itemWrapper} key={item.name}>
          <Typography variant="body">{item.name}</Typography>

          <Typography variant="body">{item.quantity}</Typography>

          <Typography variant="body">
            {item.price.toLocaleString("en-BE", {
              style: "currency",
              currency: "EUR",
            })}
          </Typography>

          <Typography variant="body">
            {item.total.toLocaleString("en-BE", {
              style: "currency",
              currency: "EUR",
            })}
          </Typography>
        </div>
      ))}

      <div className={styles.itemsFooter}>
        <Typography variant="headingS"> Amount Due</Typography>

        <Typography variant="headingM">
          {total.toLocaleString("en-BE", {
            style: "currency",
            currency: "EUR",
          })}
        </Typography>
      </div>
    </Card>
  );
};
