import { FC, ReactNode } from "react";
import { Typography } from "../typography";
import styles from "./Button.module.scss";
import classNames from "classnames";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  className?: string;
}

export const Button: FC<ButtonProps> = ({ onClick, children, className }) => {
  return (
    <button onClick={onClick} className={classNames(styles.wrapper, className)}>
      <Typography variant="headingS" tag="span">
        {children}
      </Typography>
    </button>
  );
};
