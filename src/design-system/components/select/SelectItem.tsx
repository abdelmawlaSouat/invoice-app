"use client";

import * as RadixSelect from "@radix-ui/react-select";

import styles from "./Select.module.scss";
import { CheckIcon } from "@radix-ui/react-icons";
import classNames from "classnames";
import { ReactNode, Ref, forwardRef } from "react";

type SelectItemProps = {
  value: string;
  children: ReactNode;
  className?: string;
};

export const SelectItem = forwardRef(
  (
    { children, value, className, ...props }: SelectItemProps,
    forwardedRef: Ref<HTMLDivElement>
  ) => {
    return (
      <RadixSelect.Item
        value={value}
        ref={forwardedRef}
        className={classNames(styles.item, className)}
        {...props}
      >
        <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
        <RadixSelect.ItemIndicator className={styles.itemIndicator}>
          <CheckIcon />
        </RadixSelect.ItemIndicator>
      </RadixSelect.Item>
    );
  }
);

SelectItem.displayName = "SelectItem";
