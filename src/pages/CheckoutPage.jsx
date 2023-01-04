import React from "react";
import Checkout from "../components/CheckoutComponents/Checkout";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

function CheckoutPage() {
  return (
    <React.Fragment>
      <Navbar />
      <Checkout />
      <Footer />
    </React.Fragment>
  );
}

export default CheckoutPage;
