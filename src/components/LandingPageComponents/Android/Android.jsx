import React from "react";
import AppStore from "../../../assets/images/google-play-svgrepo-com (1).png";
import GooglePlay from "../../../assets/images/google-play-svgrepo-com.png";
import AndriodImg from "../../../assets/images/andriodimg.png";

function Android() {
  return (
    <React.Fragment>
      <div>
        <div className='flex gap-[3rem] items-center justify-between pt-[3rem] sm-sc:flex-col'>
          <div className='w-[400px] ml-[10rem] sm-sc:w-[350px] mini-sc:w-[400px] sm-sc:ml-[1rem] xs:w-[290px]'>
            <h1 className='text-[48px] font-600 w-[500px] sm-sc:text-[32px]'>
              Available and
              <br /> Download Anytime!
            </h1>
            <p className='text-[16px] flex-wrap font-normal leading-6 pt-[1.5rem] pb-[1.5rem] sm-sc:text-[12px]'>
              For easy access to our lottery games, please download The Rock Empire
              lottery app. Both on Android and on iOS.
            </p>
            <div className='flex gap-6 sm-sc:gap-2'>
              <img className=' sm-sc:w-[150px]' src={GooglePlay} alt='' />
              <img className=' sm-sc:w-[150px]' src={AppStore} alt='' />
            </div>
          </div>
          <div className=' sm-sc:hidden'>
            <img src={AndriodImg} alt='' />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Android;
