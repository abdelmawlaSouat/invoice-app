import { FC, ReactNode } from "react";
import { Typography } from "../typography";
import styles from "./Button.module.scss";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

export const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <button className={styles.wrapper}>
      <Typography variant="headingS" tag="span">
        {children}
      </Typography>
    </button>
  );
};
