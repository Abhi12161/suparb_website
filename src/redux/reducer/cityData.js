import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  hasErrors: false,
  cityData: [],
};

// A slice for recipes with our 3 reducers
const cityDataSlice = createSlice({
  name: "cityData",
  initialState,
  reducers: {
    getCityData: (state) => {
      state.loading = true;
    },
    getCityDataSuccess: (state, { payload }) => {
      state.cityData = payload.data
      state.loading = false
      state.hasErrors = false
    },
    getCityDataFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

// The reducer
export const { getCityData, getCityDataSuccess, getCityDataFailure } =
  cityDataSlice.actions;

// A selector
export const cityDataSelector = (state) => state.cityData;

// The reducer
export default cityDataSlice.reducer;

