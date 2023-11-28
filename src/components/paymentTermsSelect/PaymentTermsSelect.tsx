"use client";

import { Select } from "@/design-system/components/select";
import styles from "./PaymentTermsSelect.module.scss";
import { PaymentTermsList } from "@/constants/paymentTermList";
import { PaymentTerms } from "@/types";

type PaymentTermsSelectProps = {
  value: string;
  onChange: (value: string) => void;
};

export const PaymentTermsSelect = ({
  value,
  onChange,
}: PaymentTermsSelectProps) => {
  return (
    <div>
      <Select.Root
        label="Payment Terms"
        placeholder={PaymentTermsList[value as PaymentTerms].label}
        value={value}
        onChange={onChange}
      >
        {Object.keys(PaymentTermsList).map((item) => (
          <div key={item}>
            <Select.SelectItem
              value={PaymentTermsList[item as PaymentTerms].value}
            >
              {PaymentTermsList[item as PaymentTerms].label}
            </Select.SelectItem>

            <Select.Separator className={styles.separator} />
          </div>
        ))}
      </Select.Root>
    </div>
  );
};
