import React from "react";
import Button from "../../Button";
import GetRaffleImg from "../../../assets/images/getraffleimage.png";
import Data from "./RaffleData";

function GetRaffle() {

  return (
    <React.Fragment>
      <div className='grid grid-cols-2 font-normal gap-[5rem] item-center justify-center pt-[6rem] pb-[2rem] sm-sc:grid-cols-1 sm-sc:pt-[2rem] sm-sc:mb-[-15rem] mini-sc:gap-[0rem] mini-sc:pt-[2rem] lg-sc:gap-[17rem]'>
        <div className='w-[50%] sm-sc:w-[100%]'>
          <div className='w-[700px] h-[600px] sm-sc:w-[350px] sm-sc:h-[150px] mini-sc:w-[350px] mini-sc:h-[100px]'>
            <img src={GetRaffleImg} alt='' />
          </div>
        </div>
        <div className='w-[50%] py-[11rem] sm-sc:py-[9rem] mini-sc:py-[2rem]'>
          <div className='w-[450px] sm-sc:w-[350px] sm-sc:m-4 mini-sc:w-[400px]'>
            <h2 className='text-[34px] sm-sc:text-[26px] underline decoration-treColor1 decoration-2'>Get Raffle Ticket Now</h2>
            <p className='text-[16px] leading-7 sm-sc:text-[12px] sm-sc:leading-4'>
              Remember to buy multiple tickets to increase your odds of winning,
              you can buy as many tickets as you want. <br />
              <br />
              Disclaimer: this does not guarantee your winning, only increases
              your chances.
            </p>
            <div className='list-none flex gap-[2rem] pt-[1rem] font-bold'>
              {Data.map((data, i) => (
                <li className='text-xl sm-sc:text-[16px]' key={i}>
                  {data.days}
                  <br />
                  {data.word}
                </li>
              ))}
            </div>
          </div>
          <div className='flex gap-6 mt-[1rem]  sm-sc:w-[350px] mini-sc:w-[600px] lg-sc:w-[700px]'>
            <a href='/'>
              <Button
                className='bg-treColor1 rounded-md border-2 text-[#ffffff] pr-[2rem] pl-[2rem] pt-[1rem] pb-[1rem] sm-sc:text-[12px]'
                title='Play Raffle Now'
              />
            </a>
            <a href='/'>
              <Button
                className='border-treColor1 rounded-md border-2 text-[#ffffff] pr-[2rem] pl-[2rem] pt-[1rem] pb-[1rem] sm-sc:text-[12px]'
                title='View All Ticket'
              />
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default GetRaffle;
