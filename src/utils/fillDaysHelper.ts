import { DateTime } from 'luxon';

export const fillDaysHelper = (time: DateTime): DateTime[] => {
  const firstDayOfWeek: DateTime = time.startOf('week');
  const result: DateTime[] = [];

  for (let i = 0; i <= 7; i++) {
    result.push(firstDayOfWeek.plus({ days: i }));
  }

  return result;
};
