import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  hasErrors: false,
  developerList: [],
};

// A slice for recipes with our 3 reducers
const developerListSlice = createSlice({
  name: "developerList",
  initialState,
  reducers: {
    getDeveloperList: (state) => {
      state.loading = true;
    },
    getDeveloperListSuccess: (state, { payload }) => {
      state.developerList = payload.data
      state.loading = false
      state.hasErrors = false
    },
    getDeveloperListFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

// The reducer
export const { getDeveloperList, getDeveloperListSuccess, getDeveloperListFailure } =
  developerListSlice.actions;

// A selector
export const developerListSelector = (state) => state.developerList;

// The reducer
export default developerListSlice.reducer;

