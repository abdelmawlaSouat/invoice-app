import { Typography } from "@/design-system/components";
import styles from "./InvoiceDetailCard.module.scss";
import { Address } from "@/types";

type AddressDataProps = {
  address: Address;
};

export const AddressData = ({ address }: AddressDataProps) => {
  return (
    <div className={styles.addressWrapper}>
      <Typography className={styles.secondaryText} variant="body" tag="span">
        {address.street}
      </Typography>

      <Typography className={styles.secondaryText} variant="body" tag="span">
        {address.city}
      </Typography>

      <Typography className={styles.secondaryText} variant="body" tag="span">
        {address.postCode}
      </Typography>

      <Typography className={styles.secondaryText} variant="body" tag="span">
        {address.country}
      </Typography>
    </div>
  );
};
