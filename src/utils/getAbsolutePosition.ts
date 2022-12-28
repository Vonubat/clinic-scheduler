import { DateTime } from 'luxon';

export const getAbsolutePosition = (dt: DateTime, height: number): number => {
  let position = 0;

  if (dt.hour < 9) {
    return position;
  }

  if (dt.hour > 21) {
    position = height;
    return position;
  }

  position = (((dt.hour - 9) * 60 + dt.minute) / (13 * 60)) * height;
  return position;
};
