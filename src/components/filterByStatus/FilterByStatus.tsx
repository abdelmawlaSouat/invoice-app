"use client";

import { Checkbox, Typography, Card } from "@/design-system/components";
import { DownArrow } from "@/design-system/icons";
import * as Popover from "@radix-ui/react-popover";
import { FC } from "react";
import { Status } from "../statusTag";
import styles from "./FilterByStatus.module.scss";
import { useWindowSize } from "@/design-system/hooks";
import { BREAKPOINTS } from "@/design-system/styles/breakpoints";

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

interface FilterByStatusProps {
  activeFilters: Record<Status, boolean>;
  onChange: (key: Status, value: boolean) => void;
}

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
