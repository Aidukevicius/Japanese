import React from 'react'
import Hero from '../componnents/Hero'
import Featured from '../componnents/Featured'
import Categories from '../componnents/Categories'
import Footer from '../componnents/Footer'
import Divider from '../Reusable/Divider'

function Home() {
  return (
    <div>
      <Hero />
      <Divider />
      <Featured />
      <Divider />
      <Categories />
      <Footer />
    </div>
  )
}

export default Home
