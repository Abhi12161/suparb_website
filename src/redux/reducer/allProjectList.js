import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  hasErrors: false,
  allProjectList: [],
};

// A slice for recipes with our 3 reducers
const allProjectListSlice = createSlice({
  name: "allProjectList",
  initialState,
  reducers: {
    getallProjectList: (state) => {
      state.loading = true;
    },
    getallProjectListSuccess: (state, { payload }) => {
      state.allProjectList = payload.data
      state.loading = false
      state.hasErrors = false
    },
    getallProjectListFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

// The reducer
export const { getallProjectList, getallProjectListSuccess, getallProjectListFailure } =
  allProjectListSlice.actions;

// A selector
export const allProjectListSelector = (state) => state.allProjectList;

// The reducer
export default allProjectListSlice.reducer;

