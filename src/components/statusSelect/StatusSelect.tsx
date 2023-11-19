import { Select } from "@/design-system/components/select";
import styles from "./StatusSelect.module.scss";

const statusList = [
  { value: "PAID", label: "Paid" },
  { value: "PENDING", label: "Pending" },
  { value: "DRAFT", label: "Draft" },
];

export type StatusSelectProps = {
  value: string;
  onChange: (value: string) => void;
};

export const StatusSelect = ({ value, onChange }: StatusSelectProps) => {
  return (
    <Select.Root
      label="Invoice Status"
      placeholder={statusList[0].label}
      value={value}
      onChange={onChange}
    >
      {statusList.map((item) => (
        <div key={item.value}>
          <Select.SelectItem value={item.value}>{item.label}</Select.SelectItem>

          <Select.Separator className={styles.separator} />
        </div>
      ))}
    </Select.Root>
  );
};
