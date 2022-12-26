import { DateTime } from 'luxon';
import { CalendarView } from 'types';

export const fillDaysHelper = (dt: DateTime, view: CalendarView): DateTime[] => {
  let firstDay: DateTime = dt.startOf('week');
  const result: DateTime[] = [];

  if (view === 3) {
    firstDay = dt.minus({ days: 1 });
  }

  if (view === 1) {
    firstDay = dt;
  }

  for (let i = 0; i < view; i++) {
    result.push(firstDay.plus({ days: i }));
  }

  return result;
};
