"use client";

import { Checkbox, Typography, Card } from "@/design-system/components";
import { DownArrow } from "@/design-system/icons";
import * as Popover from "@radix-ui/react-popover";
import { FC } from "react";
import { Status } from "../statusTag";
import styles from "./FilterByStatus.module.scss";

const checkBoxes = [
  {
    id: "paid",
    label: "Paid",
  },
  {
    id: "pending",
    label: "Pending",
  },
  {
    id: "draft",
    label: "Draft",
  },
];

interface FilterByStatusProps {
  activeFilters: Record<Status, boolean>;
  onChange: (key: Status, value: boolean) => void;
}

export const FilterByStatus: FC<FilterByStatusProps> = ({
  activeFilters,
  onChange,
}) => {
  return (
    <div>
      <Popover.Root>
        <Popover.Trigger asChild>
          <button className={styles.trigger}>
            <Typography variant="headingM">Filter by status</Typography>
            <DownArrow />
          </button>
        </Popover.Trigger>

        <Popover.Portal>
          <Popover.Content sideOffset={20} className={styles.content}>
            <Card>
              {checkBoxes.map((checkBox) => (
                <Checkbox
                  key={checkBox.id}
                  label={checkBox.label}
                  onChange={(value) => {
                    onChange(checkBox.id as Status, value);
                  }}
                  checked={activeFilters[checkBox.id as Status]}
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
