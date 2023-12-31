"use client";

import * as RadixSelect from "@radix-ui/react-select";
import styles from "./Select.module.scss";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { ReactNode } from "react";

type SelectProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  children: ReactNode;
};

export const Select = ({
  label,
  value,
  onChange,
  placeholder,
  children,
}: SelectProps) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{label}</label>

      <RadixSelect.Root value={value} onValueChange={onChange}>
        <RadixSelect.Trigger className={styles.trigger}>
          <RadixSelect.Value placeholder={placeholder} />
          <RadixSelect.Icon className={styles.icon}>
            <ChevronDownIcon />
          </RadixSelect.Icon>
        </RadixSelect.Trigger>

        <RadixSelect.Portal>
          <RadixSelect.Content className={styles.content}>
            <RadixSelect.ScrollUpButton className={styles.scrollButton}>
              <ChevronUpIcon />
            </RadixSelect.ScrollUpButton>

            <RadixSelect.Viewport className={styles.viewport}>
              {children}
            </RadixSelect.Viewport>

            <RadixSelect.ScrollDownButton className={styles.scrollButton}>
              <ChevronDownIcon />
            </RadixSelect.ScrollDownButton>
          </RadixSelect.Content>
        </RadixSelect.Portal>
      </RadixSelect.Root>
    </div>
  );
};
