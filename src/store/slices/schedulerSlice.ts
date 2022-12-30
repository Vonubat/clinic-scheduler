import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { locale } from 'constants/index';
import { DateTime } from 'luxon';
import { CalendarView, SchedulerType, WorkData } from 'types';

type SchedulerState = {
  dt: DateTime;
  zoom: number;
  tableHeight: number;
  view: CalendarView;
  type: SchedulerType;
  workData: WorkData[];
};

const initialState: SchedulerState = {
  dt: DateTime.now().setLocale(locale),
  zoom: 200,
  tableHeight: 0,
  view: 7,
  type: 'user',
  workData: [
    {
      master: 'Master #1',
      color: 'red',
      cabinet: 1,
      year: DateTime.now().setLocale(locale).year,
      month: DateTime.now().setLocale(locale).month,
      day: DateTime.now().setLocale(locale).day,
      startTimeHours: 15,
      endTimeHours: 16,
      startTimeMinutes: 15,
      endTimeMinutes: 45,
    },
    {
      master: 'Master #2',
      color: 'blue',
      cabinet: 2,
      year: DateTime.now().setLocale(locale).year,
      month: DateTime.now().setLocale(locale).month,
      day: DateTime.now().setLocale(locale).day,
      startTimeHours: 11,
      endTimeHours: 12,
      startTimeMinutes: 30,
      endTimeMinutes: 30,
    },
    {
      master: 'Master #3',
      color: 'green',
      cabinet: 3,
      year: DateTime.now().setLocale(locale).year,
      month: DateTime.now().setLocale(locale).month,
      day: DateTime.now().setLocale(locale).day,
      startTimeHours: 16,
      endTimeHours: 17,
      startTimeMinutes: 10,
      endTimeMinutes: 40,
    },
  ],
};

const schedulerSlice = createSlice({
  name: 'scheduler',
  initialState,
  reducers: {
    setDateTime: (state, { payload }: PayloadAction<DateTime>) => {
      state.dt = payload;
    },
    shiftLeft: (state) => {
      state.dt = state.dt.minus({ days: state.view });
    },
    shiftRight: (state) => {
      state.dt = state.dt.plus({ days: state.view });
    },
    zoomIn: (state) => {
      if (state.zoom === 1000) {
        return;
      }
      state.zoom += 100;
    },
    zoomOut: (state) => {
      if (state.zoom === 100) {
        return;
      }
      state.zoom -= 100;
    },
    zoomReset: (state) => {
      state.zoom = 200;
    },
    setTableHeight: (state, { payload }: PayloadAction<number>) => {
      state.tableHeight = payload;
    },
    setView: (state, { payload }: PayloadAction<CalendarView>) => {
      state.view = payload;
    },
    setType: (state, { payload }: PayloadAction<SchedulerType>) => {
      state.type = payload;
    },
  },
});

export default schedulerSlice.reducer;

export const {
  setDateTime,
  shiftLeft,
  shiftRight,
  zoomIn,
  zoomOut,
  zoomReset,
  setTableHeight,
  setView,
  setType,
} = schedulerSlice.actions;

export const schedulerSelector = (state: { schedulerStore: SchedulerState }) =>
  state.schedulerStore;
