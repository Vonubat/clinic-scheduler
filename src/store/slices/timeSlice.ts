import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { locale } from '../../constants';
import { DateTime } from 'luxon';

type TimeState = {
  dt: DateTime;
};

const initialState: TimeState = {
  dt: DateTime.now().setLocale(locale),
};

const timeSlice = createSlice({
  name: 'time',
  initialState,
  reducers: {
    setDateTime: (state, { payload }: PayloadAction<DateTime>) => {
      state.dt = payload;
    },
  },
});

export default timeSlice.reducer;

export const { setDateTime } = timeSlice.actions;

export const timeSelector = (state: { timeStore: TimeState }) => state.timeStore;
