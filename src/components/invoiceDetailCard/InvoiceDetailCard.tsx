import { Card, Typography } from "@/design-system/components";
import styles from "./InvoiceDetailCard.module.scss";
import { Invoice } from "@/types";
import classNames from "classnames";
import { AddressData } from "./AddressData";
import { MobileItemsCard } from "./MobileItemsCard";
import { DesktopItemsCard } from "./DesktopItemsCard";
import { useWindowSize } from "@/design-system/hooks";
import { BREAKPOINTS } from "@/design-system/styles/breakpoints";

type InvoiceDetailCardProps = {
  invoice: Invoice;
};

export const InvoiceDetailCard = ({ invoice }: InvoiceDetailCardProps) => {
  const { width } = useWindowSize();
  const dueDate = invoice.paymentDue
    ? new Date(invoice.paymentDue).toLocaleDateString("en-BE", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;

  const createdAt = new Date(invoice.createdAt).toLocaleDateString("en-BE", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const ItemsCard =
    width >= BREAKPOINTS.md ? DesktopItemsCard : MobileItemsCard;

  return (
    <Card className={styles.wrapper}>
      <div className={styles.idAndSenderAddressWrapper}>
        <div>
          <Typography className={styles.invoiceId} variant="headingS">
            <span className={styles.hashtag}>#</span>
            {invoice.id}
          </Typography>

          <Typography
            className={styles.secondaryText}
            variant="body"
            tag="span"
          >
            {invoice.description}
          </Typography>
        </div>

        <AddressData address={invoice.company.address} />
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
            {invoice.client.name}
          </Typography>

          <AddressData address={invoice.client.address} />
        </div>

        <div>
          <Typography
            className={classNames(styles.secondaryText, styles.propertyLabel)}
            variant="body"
            tag="span"
          >
            Sent to
          </Typography>

          <Typography variant="headingS">{invoice.client.email}</Typography>
        </div>
      </div>

      <ItemsCard items={invoice.products} total={invoice.total} />
    </Card>
  );
};
