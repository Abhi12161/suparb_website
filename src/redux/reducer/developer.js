import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  hasErrors: false,
  developer: [],
};

// A slice for recipes with our 3 reducers
const developerSlice = createSlice({
  name: "developer",
  initialState,
  reducers: {
    getDeveloper: (state) => {
      state.loading = true;
    },
    getDeveloperSuccess: (state, { payload }) => {
      state.developer = payload.data;
      state.loading = false;
      state.hasErrors = false;
    },
    getDeveloperFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

// The reducer
export const { getDeveloper, getDeveloperSuccess, getDeveloperFailure } =
  developerSlice.actions;

// A selector
export const developerSelector = (state) => state.developer;

// The reducer
export default developerSlice.reducer;
