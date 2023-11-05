"use client";

import "react-datepicker/dist/react-datepicker.css";
import styles from "./Header.module.scss";

import { LeftArrow, RightArrow } from "@/design-system/icons";
import { Typography } from "../typography";

type HeaderProps = {
  date: Date;
  decreaseMonth: () => void;
  increaseMonth: () => void;
  prevMonthButtonDisabled: boolean;
  nextMonthButtonDisabled: boolean;
};

export const Header = ({
  date,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}: HeaderProps) => {
  const title = date.toLocaleString("en-BE", {
    month: "short",
    year: "numeric",
  });

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.arrowBtn}
        onClick={decreaseMonth}
        disabled={prevMonthButtonDisabled}
      >
        <LeftArrow />
      </button>

      <Typography className={styles.title} variant="body">
        {title}
      </Typography>

      <button
        className={styles.arrowBtn}
        onClick={increaseMonth}
        disabled={nextMonthButtonDisabled}
      >
        <RightArrow />
      </button>
    </div>
  );
};
