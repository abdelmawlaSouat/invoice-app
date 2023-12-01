import { Card, Typography } from "@/design-system/components";
import styles from "./MobileItemsCard.module.scss";

export type Item = {
  name: string;
  quantity: number;
  price: number;
  total: number;
};

export const MobileItemsCard = ({
  items,
  total,
}: {
  items: Item[];
  total: number;
}) => {
  return (
    <Card className={styles.itemsCard}>
      {items.map((item) => (
        <div className={styles.itemWrapper} key={item.name}>
          <div>
            <Typography variant="label">{item.name}</Typography>

            <Typography className={styles.quantity} variant="body">
              {`${item.quantity} x ${item.price.toLocaleString("en-BE", {
                style: "currency",
                currency: "EUR",
              })}`}
            </Typography>
          </div>

          <Typography variant="label">
            {item.total.toLocaleString("en-BE", {
              style: "currency",
              currency: "EUR",
            })}
          </Typography>
        </div>
      ))}

      <div className={styles.itemsFooter}>
        <Typography variant="headingM"> Total</Typography>

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
