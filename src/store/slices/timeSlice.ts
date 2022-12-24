import { createSlice } from '@reduxjs/toolkit';

type TimeState = {
  timestamp: number;
  year: number;
  month: number;
  date: number;
  day: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const initialState: TimeState = {
  timestamp: 0,
  year: 0,
  month: 0,
  date: 0,
  day: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

const timeSlice = createSlice({
  name: 'time',
  initialState,
  reducers: {
    getCurrentTime: (state) => {
      const t: Date = new Date();
      state.timestamp = t.getTime();
      state.year = t.getFullYear();
      state.month = t.getMonth();
      state.date = t.getDate();
      state.day = t.getDay();
      state.hours = t.getHours();
      state.minutes = t.getMinutes();
      state.seconds = t.getSeconds();
    },
  },
});

export default timeSlice.reducer;

export const { getCurrentTime } = timeSlice.actions;

export const timeSelector = (state: { timeStore: TimeState }) => state.timeStore;
