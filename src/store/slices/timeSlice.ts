import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { locale } from 'constants/index';
import { DateTime } from 'luxon';
import { CalendarView } from 'types';

type TimeState = {
  dt: DateTime;
  zoom: number;
  view: CalendarView;
};

const initialState: TimeState = {
  dt: DateTime.now().setLocale(locale),
  zoom: 200,
  view: 7,
};

const timeSlice = createSlice({
  name: 'time',
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
  },
});

export default timeSlice.reducer;

export const { setDateTime, shiftLeft, shiftRight, zoomIn, zoomOut, zoomReset, setView } =
  timeSlice.actions;

export const timeSelector = (state: { timeStore: TimeState }) => state.timeStore;
