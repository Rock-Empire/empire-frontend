import React from "react";
import { Link } from 'react-router-dom'
import sample from "../../assets/mp4/hero-video.mp4";
import HowImg from "../../assets/images/play-cricle 2.png";

function Showcase() {
  return (
    <div>
      <video
        className='w-[100vw] h-[100vh] -z-10 fixed top-[0px] bottom-[0px] left-[0px] right-[0px]  object-cover transform-x-[-50%] transform-y-[-50%] sm-sc:top-[0px]'
        autoPlay
        loop
        muted
      >
        <source src={sample} type='video/mp4' />
      </video>
      <div className='w-[100vw] h-[100vh] -z-10 fixed top-[0px] bottom-[0px] left-[0px] right-[0px]  object-cover transform-x-[-50%] transform-y-[-50%] sm-sc:top-[0px]' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }} ></div>
      <div className='text-center fixed top-[30%] bottom-[0px] z-200 left-[0px] right-[0px] text-[#ffffff] sm-sc:-z-10'>
        <div>
          <h1 className='text-[48px] sm-sc:text-[32px]'>Stand A Chance To Win A Fortune</h1>
          <p className='text-[24px] pt-[1rem] pb-[2rem]  sm-sc:text-[14px]'>Win Big Awesome Prizes for Very Little.</p>
        </div>
        <div className='flex justify-center'>
          <Link to='/play-ticket'>
            <button className='bg-[#ED3833] p-[1rem] sm-sc:text-[12px]'>Play Raffle Now</button>
          </Link>
          <Link to='/play'>
            <button className='flex p-[1rem] sm-sc:text-[12px]'>
              <img src={HowImg} alt='' /> <span>How to Play</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Showcase;
