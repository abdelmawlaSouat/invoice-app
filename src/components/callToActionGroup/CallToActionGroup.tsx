import { Button } from "@/design-system/components";
import { InvoiceStatus } from "@/types";
import classNames from "classnames";
import styles from "./CallToActionGroup.module.scss";

export type CallToActionGroupProps = {
  className?: string;
  status: InvoiceStatus;
  onEdit: () => void;
  onDelete: () => void;
  onMarkAsPaid: () => void;
};

export const CallToActionGroup = ({
  className,
  status,
  onEdit,
  onDelete,
  onMarkAsPaid,
}: CallToActionGroupProps) => (
  <div className={classNames(styles.ctasWrapper, className)}>
    <Button className={styles.editBtn} onClick={onEdit}>
      Edit
    </Button>

    <Button className={styles.deleteBtn} onClick={onDelete}>
      Delete
    </Button>

    {status === "PENDING" && (
      <Button className={styles.markAsPaidBtn} onClick={onMarkAsPaid}>
        Mark as Paid
      </Button>
    )}
  </div>
);
