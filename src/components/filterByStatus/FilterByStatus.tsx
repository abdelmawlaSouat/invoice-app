"use client";

import { Checkbox, Typography, Card } from "@/design-system/components";
import { DownArrow } from "@/design-system/icons";
import * as Popover from "@radix-ui/react-popover";
import { FC } from "react";
import styles from "./FilterByStatus.module.scss";
import { useWindowSize } from "@/design-system/hooks";
import { BREAKPOINTS } from "@/design-system/styles/breakpoints";
import { InvoiceStatus } from "@/types";

const checkBoxes = [
  {
    id: "PAID",
    label: "Paid",
  },
  {
    id: "PENDING",
    label: "Pending",
  },
  {
    id: "DRAFT",
    label: "Draft",
  },
];

type FilterByStatusProps = {
  activeFilters: Record<InvoiceStatus, boolean>;
  onChange: (key: InvoiceStatus, value: boolean) => void;
};

export const FilterByStatus: FC<FilterByStatusProps> = ({
  activeFilters,
  onChange,
}) => {
  const { width } = useWindowSize();

  return (
    <div>
      <Popover.Root>
        <Popover.Trigger asChild>
          <button className={styles.trigger}>
            <Typography variant="headingS">
              {width >= BREAKPOINTS.md ? "Filter by status" : "Filter"}
            </Typography>
            <DownArrow />
          </button>
        </Popover.Trigger>

        <Popover.Portal>
          <Popover.Content sideOffset={20} className={styles.content}>
            <Card className={styles.card}>
              {checkBoxes.map((checkBox) => (
                <Checkbox
                  className={styles.checkbox}
                  key={checkBox.id}
                  label={checkBox.label}
                  onChange={(value) => {
                    onChange(checkBox.id as InvoiceStatus, value);
                  }}
                  checked={activeFilters[checkBox.id as InvoiceStatus]}
                  id={checkBox.id}
                />
              ))}
            </Card>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
};
