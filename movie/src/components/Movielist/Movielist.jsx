import React from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMovies } from '../../Redux/movieslice'
import './Movielist.scss'
const Movielist = () => {
  const movieList = useSelector((state) => state.movies.Search)
  console.log(movieList)

  const movie_name = 'average'
  const url = `http://www.omdbapi.com/?apikey=e17468a3&s=${movie_name}`
  const dispatch = useDispatch()
  useEffect(() => {
    const movieapi = async () => {
      const response = axios
        .get(url)
        .then((response) => {
          console.log(response.data)
          dispatch(addMovies(response.data))
        })
        .catch((err) => {
          console.log(err)
        })
    }
    movieapi()
  }, [])
  return (
    <>
      <div className="movie-list-container">
        {movieList &&
          movieList.length > 0 &&
          movieList.map((e) => {
            return (
              <MovieCard
                title={e.Title}
                type={e.Type}
                id={e.imdbID}
                img={e.Poster}
              />
            )
          })}
      </div>
    </>
  )
}

export default Movielist
