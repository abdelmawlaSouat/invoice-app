"use client";

import styles from "./TextField.module.scss";

type TextFieldProps = {
  label: string;
  type?: "text" | "email";
};

export const TextField = ({ label, type = "text" }: TextFieldProps) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{label}</label>

      <input className={styles.input} type={type} />
    </div>
  );
};
