import { Button } from "@/design-system/components";
import { InvoiceStatus } from "@/types";
import classNames from "classnames";
import styles from "./CallToActionGroup.module.scss";
import { TrashIcon, CheckIcon, Pencil1Icon } from "@radix-ui/react-icons";
import { useWindowSize } from "@/design-system/hooks";
import { BREAKPOINTS } from "@/design-system/styles/breakpoints";

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
}: CallToActionGroupProps) => {
  const { width } = useWindowSize();

  return (
    <div className={classNames(styles.ctasWrapper, className)}>
      {status === "PENDING" && (
        <Button className={styles.markAsPaidBtn} onClick={onMarkAsPaid}>
          {width >= BREAKPOINTS.md ? (
            <>
              <CheckIcon />
              Mark invoice as Paid
            </>
          ) : (
            "Mark as Paid"
          )}
        </Button>
      )}

      <Button className={styles.editBtn} onClick={onEdit}>
        {width >= BREAKPOINTS.md ? (
          <>
            <Pencil1Icon />
            Edit
          </>
        ) : (
          "Edit"
        )}
      </Button>

      <Button className={styles.deleteBtn} onClick={onDelete}>
        {width >= BREAKPOINTS.md ? (
          <>
            <TrashIcon />
            Delete
          </>
        ) : (
          "Delete"
        )}
      </Button>
    </div>
  );
};
