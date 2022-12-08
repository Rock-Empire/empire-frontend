import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import SupportHero from '../components/SupportComponents.jsx/SupportHero';
import SupportMap from '../components/SupportComponents.jsx/Support&Map';

function ContactUs() {
  return (
    <React.Fragment>
      <Navbar />
      <SupportHero />
      <SupportMap />
      <Footer />
    </React.Fragment>
  )
}

export default ContactUs;