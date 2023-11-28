"use client";

import { InputHTMLAttributes, Ref, forwardRef } from "react";
import styles from "./TextField.module.scss";
import classNames from "classnames";
import { FieldError, useFormContext } from "react-hook-form";

type TextFieldProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const TextField = forwardRef(
  (
    { label, type = "text", className, name, ...props }: TextFieldProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const {
      formState: { errors },
    } = useFormContext();

    const error = errors[name!] as FieldError;

    return (
      <div className={styles.wrapper}>
        <div className={styles.headerWrapper}>
          <label className={styles.label}>{label}</label>

          <span className={styles.errorMessage}>
            {error ? error.message : ""}
          </span>
        </div>

        <input
          className={classNames(styles.input, className)}
          type={type}
          name={name}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

TextField.displayName = "TextField";
