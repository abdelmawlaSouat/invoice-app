"use client";

import { FC } from "react";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import styles from "./Checkbox.module.scss";
import { Typography } from "../typography";
import classNames from "classnames";
import { CheckIcon } from "@radix-ui/react-icons";

export type CheckboxProps = {
  label: string;
  onChange: (value: boolean) => void;
  checked: boolean;
  id?: string;
  className?: string;
};

export const Checkbox: FC<CheckboxProps> = ({
  id,
  label,
  onChange,
  checked,
  className,
}) => (
  <div className={classNames(styles.wrapper, className)}>
    <RadixCheckbox.Root
      className={classNames(styles.root, { [styles.isChecked]: checked })}
      id={id}
      checked={checked}
      onCheckedChange={onChange}
    >
      <RadixCheckbox.Indicator className={styles.indicator}>
        <CheckIcon />
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
