import React from 'react'
import NavBar from './componnents/NavBar'
import AboutPage from './pages/AboutPage'
import RecipesPage from './pages/RecipesPage'
import HomePage from './pages/HomePage'
import '../src/index.css';
import HovereRamen from './Click/ClickRamen'


import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='about' element={<AboutPage/>}/>
        <Route path='recipes' element={<RecipesPage/>}/>
      </Routes>
    </div>
  )
}

export default App
