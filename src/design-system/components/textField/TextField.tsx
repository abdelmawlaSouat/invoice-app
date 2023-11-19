"use client";

import { InputHTMLAttributes, Ref, forwardRef } from "react";
import styles from "./TextField.module.scss";
import classNames from "classnames";

type TextFieldProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const TextField = forwardRef(
  (
    { label, type = "text", className, ...props }: TextFieldProps,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <div className={styles.wrapper}>
        <label className={styles.label}>{label}</label>

        <input
          className={classNames(styles.input, className)}
          type={type}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

TextField.displayName = "TextField";
