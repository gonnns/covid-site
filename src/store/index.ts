import { configureStore } from '@reduxjs/toolkit';
import covid from './covidSlice';

const store = configureStore({
  reducer: {
    covid,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
