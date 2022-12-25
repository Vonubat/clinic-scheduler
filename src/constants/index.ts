import { Info } from 'luxon';

export const locale = 'ru';

export const DAYS_SHORT: string[] = Info.weekdays('short', { locale });
export const DAYS_LONG: string[] = Info.weekdays('long', { locale });
export const MONTHS_SHORT: string[] = Info.months('short', { locale });
export const MONTHS_LONG: string[] = Info.months('long', { locale });

export const TIMELINE: string[] = [
  '00:00',
  '01:00',
  '02:00',
  '03:00',
  '04:00',
  '05:00',
  '06:00',
  '07:00',
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
  '23:00',
];
