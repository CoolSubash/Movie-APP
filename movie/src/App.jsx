import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../src/pages/Home/Home.jsx'
import MovieDetails from '../src/pages/SinglemovieDetails/MovieDetails'
import NoPage from '../src/pages/NoPage/PageNotFound'
import './App.scss'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
