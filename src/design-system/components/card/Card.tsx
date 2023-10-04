import { FC, ReactNode } from "react";
import styles from "./Card.module.scss";
import classNames from "classnames";

interface CardProps {
  className?: string;
  children: ReactNode;
}

export const Card: FC<CardProps> = ({ children, className }) => {
  return (
    <div className={classNames(styles.wrapper, className)}>{children}</div>
  );
};
