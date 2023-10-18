import { Card, Typography } from "@/design-system/components";
import styles from "./InvoiceDetailCard.module.scss";
import { Invoice } from "@/types";
import classNames from "classnames";
import { AddressData } from "./AddressData";

type InvoiceDetailCardProps = {
  invoice: Invoice;
};

export const InvoiceDetailCard = ({ invoice }: InvoiceDetailCardProps) => {
  const dueDate = new Date(invoice.paymentDue).toLocaleDateString("en-BE", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const createdAt = new Date(invoice.createdAt).toLocaleDateString("en-BE", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

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
        <div className={styles.datesAndContactWrapper}>
          <div>
            <Typography
              className={classNames(styles.secondaryText, styles.propertyLabel)}
              variant="body"
              tag="span"
            >
              Invoice Date
            </Typography>

            <Typography variant="headingS">{createdAt}</Typography>
          </div>

          <div>
            <Typography
              className={classNames(styles.secondaryText, styles.propertyLabel)}
              variant="body"
              tag="span"
            >
              Payment Due
            </Typography>

            <Typography variant="headingS">{dueDate}</Typography>
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

      <Card className={styles.itemsCard}>
        {invoice.items.map((item) => (
          <div className={styles.itemWrapper} key={item.name}>
            <div>
              <Typography variant="headingS">{item.name}</Typography>

              <Typography className={styles.quantity} variant="body">
                {`${item.quantity} x ${item.price.toLocaleString("en-BE", {
                  style: "currency",
                  currency: "EUR",
                })}`}
              </Typography>
            </div>

            <Typography variant="headingS">
              {item.total.toLocaleString("en-BE", {
                style: "currency",
                currency: "EUR",
              })}
            </Typography>
          </div>
        ))}

        <div className={styles.itemsFooter}>
          <Typography variant="headingS"> Total</Typography>

          <Typography variant="headingM">
            {invoice.total.toLocaleString("en-BE", {
              style: "currency",
              currency: "EUR",
            })}
          </Typography>
        </div>
      </Card>
    </Card>
  );
};
