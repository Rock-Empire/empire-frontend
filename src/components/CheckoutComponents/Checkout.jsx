import React from "react";
import { Link } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

function Checkout() {
  return (
    <div className='w-[1300px] m-auto sm-sc:w-[380px] mini-sc:w-[700px] xs:w-[300px] '>
      <div className='pt-[6rem] sm-sc:pb-[2rem] '>
        <h1 className='pt-[1rem] text-[34px] font-500'>Add Details</h1>
        <div className='flex justify-around mb-[-2rem] pt-[1rem]'>
          <Link to='/play-ticket'>
            <p className='text-[14px]'>Back to “join raffle”</p>
          </Link>
          <h2 className='text-[20px]'>Cart Summary</h2>
        </div>
      </div>
      <CheckoutForm />
    </div>
  );
}

export default Checkout;
