import React from "react";
import Bg from "../../assets/images/rafflebg.png";
import Data from "../LandingPageComponents/GetRaffle/RaffleData";

function PlayRaffleHero() {
  return (
    <div
      className='bg-no-repeat bg-black font-normal flex flex-col bg-cover text-center text-[#ffffff] items-center sm-sc:h-[80vh]'
      style={{
        backgroundImage: `url(${Bg})`,
        height: "80vh",
        opacity: "0.95",
      }}
    >
      <div className='w-[1000px] m-auto flex items-center flex-col sm-sc:w-[300px] sm-sc:flex-col mini-sc:w-[700px]'>
        <h1 className='text-[48px] sm-sc:text-[34px]'>
          Get Your Lottery Tickets Now
        </h1>
        <p className='text-[18px] font-normal leading-7 sm-sc:text-[14px]'>
          Remember to buy multiple tickets to increase your odds of winning, you
          can buy as many tickets as you want.
          <br /> Disclaimer: this does not guarantee your winning, only
          increases your chances.
        </p>
        <div className='list-none flex gap-[2rem] pt-[3rem] font-bold'>
          {Data.map((data, i) => (
            <li
              className='text-xl sm-sc:text-[14px] bg-[#E7E9EB] text-[#000000] p-[10px] w-[95px] h-[73px] sm-sc:w-[70px] xs:w-[60px]'
              key={i}
            >
              {data.days}
              <br />
              {data.word}
            </li>
          ))}
        </div>
        <div className='pt-[2rem]'>
          <button className='border-2 p-[1rem] text-[14px]'>PLAY NOW</button>
        </div>
      </div>
    </div>
  );
}

export default PlayRaffleHero;
