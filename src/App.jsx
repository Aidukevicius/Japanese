import React from 'react'
import NavBar from './componnents/NavBar'
import Hero from './componnents/Hero'
import Featured from './componnents/Featured'
import Divider from './Reusable/Divider'
import Caregories from './componnents/Categories'
import Footer from './componnents/Footer'
import '../src/index.css';
function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Divider />
      <Featured />
      <Divider />
      <Caregories />
      <Footer />

    </div>
  )
}

export default App
