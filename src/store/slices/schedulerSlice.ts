import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { locale } from 'constants/index';
import { DateTime } from 'luxon';
import { CalendarView, SchedulerType } from 'types';

type SchedulerState = {
  dt: DateTime;
  zoom: number;
  view: CalendarView;
  type: SchedulerType;
};

const initialState: SchedulerState = {
  dt: DateTime.now().setLocale(locale),
  zoom: 200,
  view: 7,
  type: 'record',
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
    setView: (state, { payload }: PayloadAction<CalendarView>) => {
      state.view = payload;
    },
    setType: (state, { payload }: PayloadAction<SchedulerType>) => {
      state.type = payload;
    },
  },
});

export default schedulerSlice.reducer;

export const { setDateTime, shiftLeft, shiftRight, zoomIn, zoomOut, zoomReset, setView, setType } =
  schedulerSlice.actions;

export const schedulerSelector = (state: { schedulerStore: SchedulerState }) =>
  state.schedulerStore;
