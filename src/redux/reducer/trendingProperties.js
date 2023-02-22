import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  hasErrors: false,
  trendingProperties: [],
};

const trendingPropertiesSlice = createSlice({
  name: "trendingProperties",
  initialState,
  reducers: {
    gettrendingProperties: (state) => {
      state.loading = true;
    },
    gettrendingPropertiesSuccess: (state, { payload }) => {
      state.trendingProperties = payload.data;
      state.loading = false;
      state.hasErrors = false;
    },
    gettrendingPropertiesFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

// The reducer
export const {
  gettrendingProperties,
  gettrendingPropertiesSuccess,
  gettrendingPropertiesFailure,
} = trendingPropertiesSlice.actions;

// A selector
export const trendingPropertiesSelector = (state) => state.trendingProperties;

// The reducer
export default trendingPropertiesSlice.reducer;
