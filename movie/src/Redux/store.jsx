import { configureStore } from '@reduxjs/toolkit'
import MovieReducer from '../Redux/movieslice'
export default configureStore({
  reducer: MovieReducer,
})
