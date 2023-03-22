import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <div className="navbar-left">
            <Link to="/" className="link">
              <div className="logo">
                <h1>Movie</h1>
              </div>
            </Link>
          </div>

          <div className="navbar-right">
            <Link to="/" className="link">
              <p className="search-movie">Search Movie</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
