import { createSlice } from '@reduxjs/toolkit';
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
    /*   getCurrentTime: (state) => {
      state.dt = DateTime.now();
    }, */
  },
});

export default timeSlice.reducer;

export const {
  /* getCurrentTime  */
} = timeSlice.actions;

export const timeSelector = (state: { timeStore: TimeState }) => state.timeStore;
