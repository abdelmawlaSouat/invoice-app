import { Button, Card, Modal, Typography } from "@/design-system/components";
import styles from "./ConfirmFillDataModal.module.scss";
import { IoWarningOutline } from "react-icons/io5";

export type ConfirmFillDataModalProps = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  personType: string;
};

export const ConfirmFillDataModal = ({
  open,
  personType,
  onClose,
  onConfirm,
}: ConfirmFillDataModalProps) => {
  return (
    <Modal
      open={open}
      contentClassName={styles.modalContent}
      overlayClassName={styles.modalOverlay}
    >
      <Card className={styles.card}>
        <Typography className={styles.title} variant="headingL">
          Fill the {personType} info
        </Typography>

        <Typography variant="body" className={styles.description}>
          We found some data for this {personType}. Would you like us to
          automatically fill in the remaining information on the form?
        </Typography>

        <div className={styles.warningWrapper}>
          <IoWarningOutline size={30} color="#f6c350" />

          <Typography variant="body" className={styles.warningMessage}>
            Important: Each {personType} can only have one unique email.
            Proceeding will fill the form for this {personType}. If you prefer a
            different email, please fill in the form accordingly.
          </Typography>
        </div>

        <div className={styles.footer}>
          <Button onClick={onClose}>No</Button>

          <Button className={styles.confirmBtn} onClick={onConfirm}>
            Yes
          </Button>
        </div>
      </Card>
    </Modal>
  );
};
