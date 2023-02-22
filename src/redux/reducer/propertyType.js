import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  hasErrors: false,
  propertyType: [],
};

const propertyTypeSlice = createSlice({
  name: "propertyType",
  initialState,
  reducers: {
    getpropertyType: (state) => {
      state.loading = true;
    },
    getpropertyTypeSuccess: (state, { payload }) => {
      state.propertyType = payload.data;
      state.loading = false;
      state.hasErrors = false;
    },
    getpropertyTypeFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

// The reducer
export const {
  getpropertyType,
  getpropertyTypeSuccess,
  getpropertyTypeFailure,
} = propertyTypeSlice.actions;

// A selector
export const propertyTypeSelector = (state) => state.propertyType;

// The reducer
export default propertyTypeSlice.reducer;
