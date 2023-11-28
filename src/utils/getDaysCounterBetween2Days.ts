export const getDaysCounterBetween2Days = (startDate: Date, endDate?: Date) => {
  if (!startDate || !endDate) {
    return 0;
  }

  const startDateInMilliseconds = startDate.getTime();
  const endDateInMilliseconds = endDate.getTime();

  const differenceInMilliseconds = Math.abs(
    startDateInMilliseconds - endDateInMilliseconds
  );

  const daysDifference = Math.ceil(
    differenceInMilliseconds / (1000 * 60 * 60 * 24)
  );

  return daysDifference;
};
