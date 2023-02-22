import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  loading: false,
  hasErrors: false,
  recentBlogs: [],
}

const recentBlogsSlice = createSlice({
  name: 'recentBlogs',
  initialState,
  reducers: {
    getrecentBlogs: (state) => {
      state.loading = true
    },
    getrecentBlogsSuccess: (state, { payload }) => {
      state.recentBlogs = payload.data
      state.loading = false
      state.hasErrors = false
    },
    getrecentBlogsFailure: (state) => {
      state.loading = false
      state.hasErrors = true
    },
  },
})

// The reducer
export const {
    getrecentBlogs,
    getrecentBlogsSuccess,
    getrecentBlogsFailure,
} = recentBlogsSlice.actions

// A selector
export const recentBlogsSelector = (state) => state.recentBlogs

// The reducer
export default recentBlogsSlice.reducer
