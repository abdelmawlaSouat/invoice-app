import { Card, Typography } from "@/design-system/components";
import styles from "./InvoiceDetailCard.module.scss";
import { Invoice } from "@/types";
import classNames from "classnames";
import { AddressData } from "./AddressData";

type InvoiceDetailCardProps = {
  invoice: Invoice;
};

export const InvoiceDetailCard = ({ invoice }: InvoiceDetailCardProps) => {
  return (
    <Card className={styles.wrapper}>
      <div>
        <Typography variant="headingS">{`#${invoice.id}`}</Typography>

        <Typography className={styles.secondaryText} variant="body" tag="span">
          {invoice.description}
        </Typography>
      </div>

      <AddressData address={invoice.senderAddress} />

      <div className={styles.descriptionWrapper}>
        <div className={styles.column}>
          <div>
            <Typography
              className={classNames(styles.secondaryText, styles.propertyLabel)}
              variant="body"
              tag="span"
            >
              Invoice Date
            </Typography>

            <Typography variant="headingS">{invoice.createdAt}</Typography>
          </div>

          <div>
            <Typography
              className={classNames(styles.secondaryText, styles.propertyLabel)}
              variant="body"
              tag="span"
            >
              Payment Due
            </Typography>

            <Typography variant="headingS">{invoice.paymentDue}</Typography>
          </div>

          <div>
            <Typography
              className={classNames(styles.secondaryText, styles.propertyLabel)}
              variant="body"
              tag="span"
            >
              Sent to
            </Typography>

            <Typography variant="headingS">{invoice.clientEmail}</Typography>
          </div>
        </div>

        <div className={styles.column}>
          <div>
            <Typography
              className={classNames(styles.secondaryText, styles.propertyLabel)}
              variant="body"
              tag="span"
            >
              Bill to
            </Typography>

            <Typography className={styles.clientName} variant="headingS">
              {invoice.clientName}
            </Typography>

            <AddressData address={invoice.clientAddress} />
          </div>
        </div>
      </div>
    </Card>
  );
};
