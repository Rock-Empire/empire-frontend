import React from "react";
import ChooseImg from "../../../assets/images/choose_us.png";
import Trophy from "../../../assets/images/trophy.png";
import Lottery from "../../../assets/images/lottery.png";

function HowToPlayBox() {
  return (
    <React.Fragment>
      <div className='w-[1300px] m-auto sm-sc:w-[400px] mini-sc:w-[800px] lg-sc:w-[1100px]'>
        <div className='grid grid-cols-3 items-start leading-6 gap-[3rem] text-center justify-center align-center sm-sc:grid-cols-1 mini-sc:grid-cols-2'>
          <div className='bg-[#ffffff] h-[300px] flex flex-col justify-center items-center text-center rounded-md w-[100%]'>
            <div className='flex justify-center items-center'>
              <img className='w-[60px] h-[60px]' src={ChooseImg} alt='' />
            </div>
            <div>
              <h2 className='pt-[2rem] pb-[2rem] text-[20px] sm-sc:text-[16px]'>
                Choose Us
              </h2>
              <p className=' text-[16px] text-[#595959] sm-sc:text-[14px]'>
                Choose The Rock Empire
              </p>
            </div>
          </div>
          <div className='bg-[#ffffff] h-[300px] flex flex-col justify-center items-center text-center rounded-md w-[100%]'>
            <div className='flex justify-center items-center'>
              <img className='w-[60px] h-[60px]' src={Lottery} alt='' />
            </div>
            <div className=' lg-sc:text-center'>
              <h2 className='pt-[2rem] pb-[2rem] text-[20px] sm-sc:text-[16px]'>
                Buy Lottery
              </h2>
              <p className=' text-[16px] text-[#595959] lg-sc:w-full lg-sc:text-center'>
                Purchase any of our lottery
              </p>
            </div>
          </div>
          <div className='bg-[#ffffff] h-[300px] flex flex-col justify-center items-center text-center rounded-md w-[100%]'>
            <div className='flex justify-center items-center'>
              <img className='w-[60px] h-[60px]' src={Trophy} alt='' />
            </div>
            <div>
              <h2 className='pt-[2rem] pb-[2rem] text-[20px] sm-sc:text-[16px]'>
                Win Ticket
              </h2>
              <p className=' text-[16px] text-[#595959]'>Win amazing prizes</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HowToPlayBox;
