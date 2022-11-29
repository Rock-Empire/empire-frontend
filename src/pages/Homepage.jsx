import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Showcase/Showcase'

function Homepage() {
  return (
    <div className='overflow-hidden'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default Homepage;