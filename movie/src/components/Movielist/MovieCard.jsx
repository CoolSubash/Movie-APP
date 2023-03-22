import React from 'react'
import { Link } from 'react-router-dom'
import './Movielist.scss'
const MovieCard = ({ title, id, img, type }) => {
  return (
    <>
      <Link to={`/movie/${id}`} className="movie_link_single">
        <div className="movie-card">
          <div className="movie-card-container">
            <div className="movie-container-items">
              <div className="movie-image">
                <img src={img} alt="" />
              </div>
              <div className="movie-type">
                <p>Type: {type}</p>
              </div>
              <div className="movie-title">
                <h1>{title}</h1>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default MovieCard
