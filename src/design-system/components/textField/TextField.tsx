"use client";

import { InputHTMLAttributes, Ref, forwardRef } from "react";
import styles from "./TextField.module.scss";

type TextFieldProps = {
  label: string;
  type?: "text" | "email";
} & InputHTMLAttributes<HTMLInputElement>;

export const TextField = forwardRef(
  (
    { label, type = "text", ...props }: TextFieldProps,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <div className={styles.wrapper}>
        <label className={styles.label}>{label}</label>

        <input className={styles.input} type={type} ref={ref} {...props} />
      </div>
    );
  }
);

TextField.displayName = "TextField";
