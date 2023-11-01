import { Button, Modal, Typography } from "@/design-system/components";
import styles from "./DeleteInvoiceModal.module.scss";

type DeleteInvoiceModalProps = {
  invoiceID: number;
  isOpen: boolean;
  onCanceled: () => void;
  onDeleted: () => void;
};

export const DeleteInvoiceModal = ({
  invoiceID,
  isOpen,
  onDeleted,
  onCanceled,
}: DeleteInvoiceModalProps) => {
  return (
    <Modal open={isOpen}>
      <div className={styles.content}>
        <Typography variant="headingM">Confirm Deletion</Typography>

        <Typography variant="body" className={styles.description}>
          Are you sure you want to delete invoice <strong>#{invoiceID}</strong>?
          This action cannot be undone
        </Typography>

        <div className={styles.footer}>
          <Button onClick={onCanceled}>Cancel</Button>

          <Button className={styles.deleteBtn} onClick={onDeleted}>
            Delete
          </Button>
        </div>
      </div>
    </Modal>
  );
};
