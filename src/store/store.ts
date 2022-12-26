import { configureStore } from '@reduxjs/toolkit';
import timeReducer from './slices/timeSlice';

export const store = configureStore({
  reducer: {
    timeStore: timeReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['time/setDateTime'],
        // Ignore these paths in the state
        ignoredPaths: ['timeStore.dt'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
