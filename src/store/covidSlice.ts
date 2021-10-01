import { createSlice, createSelector, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '.';
import { Country } from '../core/interface/Country';

interface CovidState {
  country: string;
  countries: Country[];
}

const initialState: CovidState = {
  country: '',
  countries: [],
};

export const fetchCountries = createAsyncThunk('covid/fetchCountries', async () => {
  const response = await axios.get('https://api.covid19api.com/countries');
  const data = await response.data;
  return data;
});

const covidSlice = createSlice({
  name: 'covid',
  initialState,
  reducers: {
    changeCountry: (state, action) => {
      state.country = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      state.countries = action.payload;
      // TODO: Null check
      state.country = state.countries[0].ISO2;
    });
  },
});

const getCountry = (state: RootState) => state.covid.country;
const getCountries = (state: RootState) => state.covid.countries;

export const { changeCountry } = covidSlice.actions;

export const selectCountry = createSelector([getCountry], (country) => {
  return country;
});

export const selectCountries = createSelector([getCountries], (countries) => {
  return countries;
});

export default covidSlice.reducer;
