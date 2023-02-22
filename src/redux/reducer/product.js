import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  hasErrors: false,
  product: [],
};

// A slice for recipes with our 3 reducers
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProduct: (state) => {
      state.loading = true;
    },
    getProductSuccess: (state, { payload }) => {
      state.product = payload.data
      state.loading = false
      state.hasErrors = false
    },
    getProductFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

// The reducer
export const { getProduct, getProductSuccess, getProductFailure } =
  productSlice.actions;

// A selector
export const productSelector = (state) => state.product;

// The reducer
export default productSlice.reducer;
