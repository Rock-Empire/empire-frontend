import React from "react";
import ChooseImg from "../../assets/images/choose_us.png";
import Trophy from "../../assets/images/trophy.png";
import Lottery from "../../assets/images/lottery.png";
import AndroidImage from "../../assets/images/andriodimg.png";

function HowToPlay() {
  return (
    <div className='flex items-center justify-between font-normal'>
      <div className='w-[100%] h-[400px] p-[3rem] flex flex-col gap-[3rem]'>
        <h1 className='text-center text-[34px] font-600'>How to Play</h1>
        <div className='flex gap-[1rem] items-center'>
          <img className='rounded-[50%]' src={ChooseImg} alt='' />
          <div>
            <h1>Choose Us</h1>
            <p>Choose The Rock Empire</p>
          </div>
        </div>
        <div className='flex gap-[1rem] items-center'>
          <img className='rounded-[50%]' src={Trophy} alt='' />
          <div>
            <h1>Buy Lottery</h1>
            <p>Purchase any of our lottery</p>
          </div>
        </div>
        <div className='flex gap-[1rem] items-center'>
          <img className='rounded-[50%]' src={Lottery} alt='' />
          <div>
            <h1>Win Ticket</h1>
            <p>Win amazing prizes</p>
          </div>
        </div>
      </div>
      <div className='h-[670px] w-[900px]'>
        <img src={AndroidImage} alt='' />
      </div>
    </div>
  );
}

export default HowToPlay;
