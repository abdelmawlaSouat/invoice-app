import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { Typography } from "../typography";
import styles from "./Button.module.scss";
import classNames from "classnames";
import { Spinner } from "../spinner";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({
  children,
  className,
  isLoading,
  ...props
}) => {
  return (
    <button className={classNames(styles.wrapper, className)} {...props}>
      <Typography variant="button" tag="span">
        {isLoading ? <Spinner /> : children}
      </Typography>
    </button>
  );
};
