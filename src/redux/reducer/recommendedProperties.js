import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  hasErrors: false,
  recommendedProperties: [],
};

const recommendedPropertiesSlice = createSlice({
  name: "recommendedProperties",
  initialState,
  reducers: {
    getrecommendedProperties: (state) => {
      state.loading = true;
    },
    getrecommendedPropertiesSuccess: (state, { payload }) => {
      state.recommendedProperties = payload.data;
      state.loading = false;
      state.hasErrors = false;
    },
    getrecommendedPropertiesFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

// The reducer
export const {
  getrecommendedProperties,
  getrecommendedPropertiesSuccess,
  getrecommendedPropertiesFailure,
} = recommendedPropertiesSlice.actions;

// A selector
export const recommendedPropertiesSelector = (state) => state.recommendedProperties;

// The reducer
export default recommendedPropertiesSlice.reducer;
