import { Button, Card, Modal, Typography } from "@/design-system/components";
import styles from "./DeleteInvoiceModal.module.scss";

type DeleteInvoiceModalProps = {
  invoiceID: number;
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
  isDeleting: boolean;
};

export const DeleteInvoiceModal = ({
  invoiceID,
  isOpen,
  onDelete,
  isDeleting,
  onClose,
}: DeleteInvoiceModalProps) => {
  return (
    <Modal open={isOpen} contentClassName={styles.content}>
      <Card className={styles.card}>
        <Typography className={styles.title} variant="headingM">
          Confirm Deletion
        </Typography>

        <Typography variant="body" className={styles.description}>
          Are you sure you want to delete invoice <strong>#{invoiceID}</strong>?
          This action cannot be undone.
        </Typography>

        <div className={styles.footer}>
          <Button onClick={onClose}>Cancel</Button>

          <Button
            className={styles.deleteBtn}
            isLoading={isDeleting}
            onClick={onDelete}
          >
            Delete
          </Button>
        </div>
      </Card>
    </Modal>
  );
};
