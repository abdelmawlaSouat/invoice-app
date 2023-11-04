"use client";

import React, { FC } from "react";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import styles from "./Checkbox.module.scss";
import { Typography } from "../typography";
import classNames from "classnames";
import { Check } from "@/design-system/icons";

export type CheckboxProps = {
  label: string;
  onChange: (value: boolean) => void;
  checked: boolean;
  id?: string;
};

export const Checkbox: FC<CheckboxProps> = ({
  id,
  label,
  onChange,
  checked,
}) => (
  <div className={styles.wrapper}>
    <RadixCheckbox.Root
      className={classNames(styles.root, { [styles.isChecked]: checked })}
      id={id}
      checked={checked}
      onCheckedChange={onChange}
    >
      <RadixCheckbox.Indicator className={styles.indicator}>
        <Check />
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>

    <Typography
      variant="headingS"
      tag="label"
      className={styles.label}
      htmlFor={id}
    >
      {label}
    </Typography>
  </div>
);
