import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  hasErrors: false,
  propertyServices: [],
};

const propertyServicesSlice = createSlice({
  name: "propertyServices",
  initialState,
  reducers: {
    getpropertyServices: (state) => {
      state.loading = true;
    },
    getpropertyServicesSuccess: (state, { payload }) => {
      state.propertyServices = payload.data;
      state.loading = false;
      state.hasErrors = false;
    },
    getpropertyServicesFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

// The reducer
export const {
  getpropertyServices,
  getpropertyServicesSuccess,
  getpropertyServicesFailure,
} = propertyServicesSlice.actions;

// A selector
export const propertyServicesSelector = (state) => state.propertyServices;

// The reducer
export default propertyServicesSlice.reducer;
