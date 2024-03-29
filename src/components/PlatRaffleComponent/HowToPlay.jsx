import React from "react";
import ChooseImg from "../../assets/images/choose_us.png";
import Trophy from "../../assets/images/trophy.png";
import Lottery from "../../assets/images/lottery.png";
import AndroidImage from "../../assets/images/andriodimg.png";

function HowToPlay() {
  return (
    <div className='flex items-center justify-between font-normal mt-[-9rem] sm-sc:flex-col sm-sc:mt-[-1rem]'>
      <div className='w-[100%] h-[300px] p-[3rem] flex flex-col gap-[3rem] sm-sc:h-[]'>
        <h1 className='text-center text-[34px] font-600'>How to Play</h1>
        <div className='flex gap-[1rem] items-center'>
          <img className='rounded-[50%] h-[60px]' src={ChooseImg} alt='' />
          <div className='leading-8'>
            <h1>Choose Us</h1>
            <p>Choose The Rock Empire</p>
          </div>
        </div>
        <div className='flex gap-[1rem] items-center'>
          <img className='rounded-[50%] h-[60px]' src={Trophy} alt='' />
          <div className='leading-8'>
            <h1>Buy Lottery</h1>
            <p>Purchase any of our lottery</p>
          </div>
        </div>
        <div className='flex gap-[1rem] items-center'>
          <img className='rounded-[50%] h-[60px]' src={Lottery} alt='' />
          <div className='leading-8'>
            <h1>Win Ticket</h1>
            <p>Win amazing prizes</p>
          </div>
        </div>
      </div>
      <div className='h-[700px] w-[900px] sm-sc:h-[400px] sm-sc:w-[100%] sm-sc:mt-[6rem] mini-sc:w-[800px] mini-sc:h-[600px]'>
        <img src={AndroidImage} alt='' />
      </div>
    </div>
  );
}

export default HowToPlay;
