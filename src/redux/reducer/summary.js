import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  loading: false,
  hasErrors: false,
  summary: [],
}

// A slice for recipes with our 3 reducers
const summarySlice = createSlice({
  name: 'summary',
  initialState,
  reducers: {
    getSummary: (state) => {
      state.loading = true
    },
    getSummarySuccess: (state, { payload }) => {
      state.summary = payload.data
      state.loading = false
      state.hasErrors = false
    },
    getSummaryFailure: (state) => {
      state.loading = false
      state.hasErrors = true
    },
  },
})

// The reducer
export const {
    getSummary,
    getSummarySuccess,
    getSummaryFailure,
} = summarySlice.actions

// A selector
export const sumarrySelector = (state) => state.summary

// The reducer
export default summarySlice.reducer
