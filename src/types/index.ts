export type CalendarView = 1 | 3 | 7;

export type SchedulerType = 'work' | 'customer';

export interface WorkData {
  master: string;
  color: string;
  cabinet: number;
  year: number;
  month: number;
  day: number;
  startTimeHours: number;
  endTimeHours: number;
  startTimeMinutes: number;
  endTimeMinutes: number;
}
