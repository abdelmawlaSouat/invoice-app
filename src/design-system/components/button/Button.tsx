import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { Typography } from "../typography";
import styles from "./Button.module.scss";
import classNames from "classnames";

type ButtonProps = {
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button className={classNames(styles.wrapper, className)} {...props}>
      <Typography variant="headingS" tag="span">
        {children}
      </Typography>
    </button>
  );
};
