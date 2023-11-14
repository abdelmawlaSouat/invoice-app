"use client";

import { Select } from "@/design-system/components/select";
import styles from "./PaymentTermsSelect.module.scss";

const paymentTermsList = [
  {
    value: "net1",
    label: "Net 1 Day",
  },
  {
    value: "net7",
    label: "Net 7 Days",
  },
  {
    value: "net14",
    label: "Net 14 Days",
  },
  {
    value: "net30",
    label: "Net 30 Days",
  },
  {
    value: "net45",
    label: "Net 45 Days",
  },
  {
    value: "net60",
    label: "Net 60 Days",
  },
  {
    value: "net90",
    label: "Net 90 Days",
  },
];

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
        placeholder={paymentTermsList[0].label}
        value={value}
        onChange={onChange}
      >
        {paymentTermsList.map((item) => (
          <div key={item.value}>
            <Select.SelectItem value={item.value}>
              {item.label}
            </Select.SelectItem>

            <Select.Separator className={styles.separator} />
          </div>
        ))}
      </Select.Root>
    </div>
  );
};
