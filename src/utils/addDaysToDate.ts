export const addDaysToDate = (date: Date, daysToAdd: number) => {
  const newDate = new Date(date);

  newDate.setDate(newDate.getDate() + daysToAdd);

  return newDate;
};
