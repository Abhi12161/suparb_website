import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  hasErrors: false,
  popularBuilders: [],
};

const popularBuildersSlice = createSlice({
  name: "popularBuilders",
  initialState,
  reducers: {
    getpopularBuilders: (state) => {
      state.loading = true;
    },
    getpopularBuildersSuccess: (state, { payload }) => {
      state.popularBuilders = payload.data;
      state.loading = false;
      state.hasErrors = false;
    },
    getpopularBuildersFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

// The reducer
export const {
  getpopularBuilders,
  getpopularBuildersSuccess,
  getpopularBuildersFailure,
} = popularBuildersSlice.actions;

// A selector
export const popularBuildersSelector = (state) => state.popularBuilders;

// The reducer
export default popularBuildersSlice.reducer;
