import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import PlayRaffleHero from '../components/PlatRaffleComponent/PlayRaffleHero';
import HowToPlay from '../components/PlatRaffleComponent/HowToPlay';
import Winners from '../components/LandingPageComponents/Winners/Winners';
import PastWinners from '../components/LandingPageComponents/Android/PastWinners/PastWinners';

function PlayRafflePage() {
  return (
    <React.Fragment>
      <Navbar />
      <PlayRaffleHero />
      <HowToPlay />
      <Winners />
      <PastWinners />
      <Footer />
    </React.Fragment>
  )
}

export default PlayRafflePage;