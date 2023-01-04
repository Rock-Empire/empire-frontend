import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Referral from "../Referral/Referral";

function ReferralPage() {
  return (
    <div>
      <Navbar />
      <div className='h-[100%]'>
        <Referral />
      </div>
      <Footer />
    </div>
  );
}

export default ReferralPage;
