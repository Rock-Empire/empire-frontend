import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import AboutUsHero from "../components/AboutUsComponents/AboutUsHero";
import ValueStatement from "../components/AboutUsComponents/ValueStatement";
import MeetTeam from "../components/AboutUsComponents/MeetTeam";
import WhatWeStandFor from "../components/AboutUsComponents/WhatWeStandFor";

function AboutUsPage() {
  return (
    <React.Fragment>
      <div>
        <Navbar />
        <AboutUsHero />
        <div className='bg-[#E7E9EB]'>
          <ValueStatement />
          <MeetTeam />
          <WhatWeStandFor />
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}

export default AboutUsPage;
