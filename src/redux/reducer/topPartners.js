import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  hasErrors: false,
  topPartners: [],
};

const topPartnersSlice = createSlice({
  name: "topPartners",
  initialState,
  reducers: {
    gettopPartners: (state) => {
      state.loading = true;
    },
    gettopPartnersSuccess: (state, { payload }) => {
      state.topPartners = payload.data;
      state.loading = false;
      state.hasErrors = false;
    },
    gettopPartnersFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

// The reducer
export const {
  gettopPartners,
  gettopPartnersSuccess,
  gettopPartnersFailure,
} = topPartnersSlice.actions;

// A selector
export const topPartnersSelector = (state) => state.topPartners;

// The reducer
export default topPartnersSlice.reducer;
