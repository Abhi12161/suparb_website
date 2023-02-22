import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  hasErrors: false,
  blog: [],
};

// A slice for recipes with our 3 reducers
const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    getBlog: (state) => {
      state.loading = true;
    },
    getBlogSuccess: (state, { payload }) => {
      state.blog = payload.data
      state.loading = false
      state.hasErrors = false
    },
    getBlogFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

// The reducer
export const { getBlog, getBlogSuccess, getBlogFailure } =
  blogSlice.actions;

// A selector
export const blogSelector = (state) => state.blog;

// The reducer
export default blogSlice.reducer;

