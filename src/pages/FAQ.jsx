import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import FAQHero from '../components/FAQComponents/FAQHero';
import FAQQuestions from '../components/FAQComponents/FAQQuestions';

function FAQ() {
  return (
    <React.Fragment>
      <div>
        <Navbar />
        <FAQHero />
        <FAQQuestions />
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default FAQ;