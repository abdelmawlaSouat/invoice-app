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
        <Typography className={styles.label} variant="headingS">
          Name
        </Typography>

        <Typography className={styles.label} variant="headingS">
          QTY.
        </Typography>

        <Typography className={styles.label} variant="headingS">
          Price
        </Typography>

        <Typography className={styles.label} variant="headingS">
          Total
        </Typography>
      </div>

      {items.map((item) => (
        <div className={styles.itemWrapper} key={item.name}>
          <Typography variant="headingS">{item.name}</Typography>

          <Typography className={styles.quantity} variant="headingS">
            {item.quantity}
          </Typography>

          <Typography className={styles.pricePerItem} variant="headingS">
            {item.price.toLocaleString("en-BE", {
              style: "currency",
              currency: "EUR",
            })}
          </Typography>

          <Typography variant="headingS">
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
