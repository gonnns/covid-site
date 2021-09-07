import { createSlice, createSelector } from '@reduxjs/toolkit';

const covidSlice = createSlice({
  name: 'covid',
  initialState: {
    country: 'kr',
  },
  reducers: {
    changeCountry: (state, action) => {
      state.country = action.payload;
    },
  },
});

const getCountry = (state) => state.covid.country;

export const { changeCountry } = covidSlice.actions;

export const selectCountry = createSelector([getCountry], (country) => {
  return country;
});

export default covidSlice.reducer;
