"use client";

import ReactDatePicker from "react-datepicker";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Header } from "./Header";
import { Typography } from "../typography";

import "./ReactDatePicker.scss";
import styles from "./DatePicker.module.scss";
import { FieldError, useFormContext } from "react-hook-form";

type DatePickerProps = {
  label: string;
  value: Date;
  name: string;
  onChange: (value: Date | null) => void;
};

export const DatePicker = ({
  label,
  value,
  onChange,
  name,
}: DatePickerProps) => {
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

      <ReactDatePicker
        selected={value}
        onChange={(date) => onChange(date)}
        className={styles.datePicker}
        calendarClassName={styles.calendar}
        icon={<CalendarIcon className={styles.calendarIcon} color="#7E88C3" />}
        showIcon
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <Header
            date={date}
            decreaseMonth={decreaseMonth}
            increaseMonth={increaseMonth}
            prevMonthButtonDisabled={prevMonthButtonDisabled}
            nextMonthButtonDisabled={nextMonthButtonDisabled}
          />
        )}
        renderDayContents={(day) => (
          <Typography variant="body" className={styles.day}>
            {day}
          </Typography>
        )}
      />
    </div>
  );
};
