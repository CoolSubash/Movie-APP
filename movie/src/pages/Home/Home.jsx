import React from 'react'
import { useSelector } from 'react-redux'
import { Footer } from '../../components/Footer/Footer'
import Movielist from '../../components/Movielist/Movielist'
import Navbar from '../../components/Navbar/Navbar'
import './Home.scss'
const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="navbar-home">
          <Navbar />
        </div>
        <div className="main">
          <Movielist />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Home
