import {
  Button,
  DatePicker,
  TextField,
  Typography,
} from "@/design-system/components";
import styles from "./InvoiceForm.module.scss";
import { PaymentTermsSelect } from "../paymentTermsSelect";

export const InvoiceForm = () => {
  return (
    <form>
      <div className={styles.section}>
        <Typography variant="body" className={styles.label}>
          Bill From
        </Typography>

        <TextField label="Street Address" />

        <div className={styles.row}>
          <TextField label="City" />

          <TextField label="Post Code" />
        </div>

        <TextField label="Country" />
      </div>

      <div className={styles.section}>
        <Typography variant="body" className={styles.label}>
          Bill To
        </Typography>

        <TextField label="Client's Name" />

        <TextField label="Client's Email" type="email" />

        <TextField label="Street Address" />

        <div className={styles.row}>
          <TextField label="City" />

          <TextField label="Post Code" />
        </div>

        <TextField label="Country" />
      </div>

      <div className={styles.section}>
        <DatePicker
          label="Invoice Date"
          value={new Date()}
          onChange={() => {
            console.log("Date picker");
          }}
        />

        <PaymentTermsSelect />

        <TextField label="Project Description" />
      </div>

      <Button
        onClick={() => {
          console.log("BYE");
        }}
      >
        SEND
      </Button>
    </form>
  );
};
