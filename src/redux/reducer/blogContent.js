import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  hasErrors: false,
  blogContent: [],
};

// A slice for recipes with our 3 reducers
const blogContentSlice = createSlice({
  name: "blogContent",
  initialState,
  reducers: {
    getBlogContent: (state) => {
      state.loading = true;
    },
    getBlogContentSuccess: (state, { payload }) => {
      state.blogContent = payload.data
      state.loading = false
      state.hasErrors = false
    },
    getBlogContentFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

// The reducer
export const { getBlogContent, getBlogContentSuccess, getBlogContentFailure } =
  blogContentSlice.actions;

// A selector
export const blogContentSelector = (state) => state.blogContent;

// The reducer
export default blogContentSlice.reducer;

