import { Card, Typography } from "@/design-system/components";
import styles from "./InvoiceDetailCard.module.scss";
import { Invoice } from "@/types";
import classNames from "classnames";
import { AddressData } from "./AddressData";
import { MobileItemsCard } from "./MobileItemsCard";
import { DesktopItemsCard } from "./DesktopItemsCard";

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
      <div className={styles.idAndSenderAddressWrapper}>
        <div>
          <Typography
            className={styles.invoiceId}
            variant="headingS"
          >{`#${invoice.id}`}</Typography>

          <Typography
            className={styles.secondaryText}
            variant="body"
            tag="span"
          >
            {invoice.description}
          </Typography>
        </div>

        <AddressData address={invoice.senderAddress} />
      </div>

      <div className={styles.descriptionWrapper}>
        <div className={styles.datesWrapper}>
          <div className={styles.creationDateWrapper}>
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

      <div className={styles.mobileItemsCard}>
        <MobileItemsCard items={invoice.items} total={invoice.total} />
      </div>

      <div className={styles.desktopItemsCard}>
        <DesktopItemsCard items={invoice.items} total={invoice.total} />
      </div>
    </Card>
  );
};