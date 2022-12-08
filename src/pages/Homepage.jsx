import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/LandingPageComponents/Showcase/Showcase';
import Sponsors from '../components/LandingPageComponents/Sponsors/Sponsors';
import HowToPlay from '../components/LandingPageComponents/HowToPlay/HowToPlay';
import HowToPlayBox from '../components/LandingPageComponents/HowToPlayBox/HowToPlayBox';
import Footer from '../components/Footer/Footer';
import GetRaffle from '../components/LandingPageComponents/GetRaffle/GetRaffle';
import Winners from '../components/LandingPageComponents/Winners/Winners';
import Android from '../components/LandingPageComponents/Android/Android';
import PastWinners from '../components/LandingPageComponents/Android/PastWinners/PastWinners';

function Homepage() {
  return (
    <div className='overflow-hidden'>
      <Navbar />
      <Hero />
      <div className='bg-[#E7E9EB]'>
        <Sponsors />
        <HowToPlay />
        <HowToPlayBox />
        <GetRaffle />
        <Winners />
        <PastWinners />
        <Android />
        <Footer />
      </div>
    </div>
  )
}

export default Homepage;