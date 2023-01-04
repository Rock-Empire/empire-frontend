import React from 'react';
import Bg from '../../assets/images/aboutbgimage.png';

function AboutUsHero() {
  return (
    <div className='bg-no-repeat font-normal flex bg-cover text-center text-[#ffffff] items-center'
      style={{
        backgroundImage: `url(${Bg})`,
        height: '70vh',
      }}
    >
      <div className='w-[500px] m-auto flex flex-col sm-sc:w-[300px]'>
        <h1 className='text-[48px] sm-sc:text-[34px]'>About Us</h1>
        <p className='text-[18px] font-normal leading-7 sm-sc:text-[14px]'>We created a fundraising platform for a new generation of donors. We give everyone a chance to dream big and win once-in-a-lifetime prizes while helping to make the world a better place.</p>
      </div>
    </div>
  )
}

export default AboutUsHero;