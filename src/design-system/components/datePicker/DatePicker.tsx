"use client";

import ReactDatePicker from "react-datepicker";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Header } from "./Header";
import { Typography } from "../typography";

import "./ReactDatePicker.scss";
import styles from "./DatePicker.module.scss";

type DatePickerProps = {
  label: string;
  value: Date | null;
  onChange: (value: Date | null) => void;
};

export const DatePicker = ({ label, value, onChange }: DatePickerProps) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{label}</label>

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
