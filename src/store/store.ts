import { configureStore } from '@reduxjs/toolkit';

import schedulerReducer from './slices/schedulerSlice';

export const store = configureStore({
  reducer: {
    schedulerStore: schedulerReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['scheduler/setDateTime'],
        // Ignore these paths in the state
        ignoredPaths: ['schedulerStore.dt'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
