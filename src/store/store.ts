// src/store/store.ts

import { configureStore } from '@reduxjs/toolkit';
import pagesReducer from './pagesSlice';

const store = configureStore({
  reducer: {
    pages: pagesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
