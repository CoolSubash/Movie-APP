import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Navbar from '../../components/Navbar/Navbar'
import { Footer } from '../../components/Footer/Footer'
import './SingleMovie.scss'
import { useParams } from 'react-router-dom'
const MovieDetails = () => {
  const { id } = useParams()

  const url = `http://www.omdbapi.com/?apikey=e17468a3&i=${id}`
  const [data, setdata] = useState([])
  useEffect(() => {
    const movieapi = async () => {
      const response = axios
        .get(url)
        .then((response) => {
          setdata(response.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    movieapi()
  }, [])

  return (
    <>
      <div className="movie-single-details">
        <Navbar />
        <main>
          <div className="single-movie">
            <div className="single-movie-container">
              <div className="single-movie-details">
                <div className="single-movie-banner">
                  <img src={data?.Poster} alt="" />
                </div>
                <div className="single-movie-info">
                  <div className="rating">
                    <span>Rating: {data?.imdbRating}</span>
                  </div>
                  <div className="rating">
                    <span>Relased: {data?.Released}</span>
                  </div>
                  <div className="rating">
                    <span>Runtime {data?.Runtime}</span>
                  </div>
                  <div className="rating">
                    <span>Writer {data?.Writer}</span>
                  </div>
                </div>
                <div className="single-movie-title">
                  <h1>{data?.Title}</h1>
                </div>
                <div className="single-movie-plot">
                  <p>{data?.Plot}</p>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div className="single-footer">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default MovieDetails
