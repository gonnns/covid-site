import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import covid from './covidSlice';

const store = configureStore({
  reducer: {
    covid,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
