import { configureStore } from '@reduxjs/toolkit';
import { timeReducer } from './';

export const store = configureStore({
  reducer: {
    timeStore: timeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
