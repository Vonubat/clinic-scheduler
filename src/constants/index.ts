import { Info } from 'luxon';

export const locale = 'ru';

export const DAYS_SHORT = Info.weekdays('short', { locale });
export const DAYS_LONG = Info.weekdays('long', { locale });
export const MONTHS_SHORT = Info.months('short', { locale });
export const MONTHS_LONG = Info.months('long', { locale });
