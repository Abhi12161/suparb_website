import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  hasErrors: false,
  nearByProperty: [],
};

const nearByPropertySlice = createSlice({
  name: "nearByProperty",
  initialState,
  reducers: {
    getnearByProperty: (state) => {
      state.loading = true;
    },
    getnearByPropertySuccess: (state, { payload }) => {
      state.nearByProperty = payload.data;
      state.loading = false;
      state.hasErrors = false;
    },
    getnearByPropertyFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

// The reducer
export const {
  getnearByProperty,
  getnearByPropertySuccess,
  getnearByPropertyFailure,
} = nearByPropertySlice.actions;

// A selector
export const nearByPropertySelector = (state) => state.nearByProperty;

// The reducer
export default nearByPropertySlice.reducer;
