import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  hasErrors: false,
  cityName: [],
};

// A slice for recipes with our 3 reducers
const citySlice = createSlice({
  name: "cityName",
  initialState,
  reducers: {
    getCity: (state) => {
      state.loading = true;
    },
    getCitySuccess: (state, { payload }) => {
      state.cityName = payload.data
      state.loading = false
      state.hasErrors = false
    },
    getCityFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

// The reducer
export const { getCity, getCitySuccess, getCityFailure } =
  citySlice.actions;

// A selector
export const citySelector = (state) => state.cityName;

// The reducer
export default citySlice.reducer;

