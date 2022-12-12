import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import PlayRaffleHero from '../components/PlatRaffleComponent/PlayRaffleHero';
import HowToPlay from '../components/PlatRaffleComponent/HowToPlay';


function PlayRafflePage() {
  return (
    <React.Fragment>
      <Navbar />
      <PlayRaffleHero />
      <HowToPlay />
      <Footer />
    </React.Fragment>
  )
}

export default PlayRafflePage;