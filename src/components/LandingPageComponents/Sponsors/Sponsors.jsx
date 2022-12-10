import React from 'react';
import Logo from '../../../assets/images/empire-logo.png';
import Bet from '../../../assets/images/bet.png';
import Paystack from '../../../assets/images/paystack.png';

function Sponsors() {
  return (
    <div className='mt-[9.5rem] pt-[2rem] sm-sc:mt-[5rem] sm-sc:mt-[1rem]'>
      <div className='flex justify-center gap-4 items-center '>
        <div className='' style={{borderTop: '3px solid #000000', width: '30%'}}></div>
        <div>
          <h1 className='text-[#ED3833] text-[20px] sm-sc:text-[18px]'>Partnered By</h1>
        </div>
        <div className='' style={{borderTop: '3px solid #000000', width: '30%'}}></div>
      </div>
      <div className='grid grid-cols-6 place-items-center pt-[1rem] w-[1400px] m-auto sm-sc:grid-cols-2 sm-sc:w-[300px] sm-sc:mt-[1rem] sm-sc:gap-12 mini-sc:grid-cols-3 mini-sc:w-[800px] mini-sc:gap-6 lg-sc:w-[1200px]'>
        <div>
          <img src={Logo} className='w-[120px] h-[50px]' alt="" />
        </div>
        <div>
          <img src={Bet} className='w-[120px] h-[50px]' alt="" />
        </div>
        <div>
          <img src={Paystack} className='w-[120px] h-[50px]' alt="" />
        </div>
        <div>
          <img src={Logo} className='w-[120px] h-[50px]' alt="" />
        </div>
        <div>
          <img src={Paystack} className='w-[120px] h-[50px]' alt="" />
        </div>
        <div>
          <img src={Bet} className='w-[120px] h-[50px]' alt="" />
        </div>
      </div>
    </div>
  )
}

export default Sponsors;