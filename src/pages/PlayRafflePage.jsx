import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import PlayRaffleHero from "../components/PlatRaffleComponent/PlayRaffleHero";
import HowToPlay from "../components/PlatRaffleComponent/HowToPlay";
import Winners from "../components/LandingPageComponents/Winners/Winners";
import PastWinners from "../components/LandingPageComponents/Android/PastWinners/PastWinners";
import TicketType from "../components/TicketTypeComponents/TicketType";

function PlayRafflePage() {
  return (
    <React.Fragment>
      <div className="mini-sc:overflow-hidden">
      <Navbar />
      <PlayRaffleHero />
      <TicketType />
      <HowToPlay />
      <div className='sm-sc:mt-[4rem] mini-sc:ml-[-3rem]'>
        <Winners />
      </div>
      <PastWinners />
      <Footer />
      </div>
    </React.Fragment>
  );
}

export default PlayRafflePage;
