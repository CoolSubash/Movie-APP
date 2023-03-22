import { createSlice } from '@reduxjs/toolkit'

export const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    movies: {},
  },
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addMovies } = movieSlice.actions

export default movieSlice.reducer
