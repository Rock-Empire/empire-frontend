import React from "react";
import { Link } from "react-router-dom";
import heroVideo from "../../../assets/mp4/hero-video.mp4";
import Button from "../../Button";
import HowImg from "../../../assets/images/play-cricle 2.png";

const Showcase = () => {
  return (
    <React.Fragment>
      <div className='flex items-center justify-center w-full h-[70vh] text-center object-cover'>
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          className='object-cover h-[100vh] mt-[12rem] w-full absolute -z-10'
        />
        <div
          className='object-cover h-[100vh] w-full absolute -z-10'
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        ></div>
        <div className={`p-8 flex flex-col duration-500 w-full`}>
          <h1 className='text-[48px] sm-sc:text-[32px] text-[#ffffff]'>
            Stand A Chance To Win A Fortune
          </h1>
          <p className='text-[24px] pt-[1rem] pb-[2rem] text-[#ffffff] sm-sc:text-[14px]'>
            Win Big Awesome Prizes for Very Little.
          </p>
          <div className='flex flex-row justify-center items-center'>
            <div className='flex justify-center gap-4'>
              <Link to='/play-ticket'>
                <Button
                  className='bg-treColor1 rounded-md p-[1rem] text-[#ffffff] sm-sc:text-[12px]'
                  title='Play Raffle Now'
                />
              </Link>
              <Link to='/play'>
                <div className='flex justify-center items-center'>
                  <img src={HowImg} alt='' className='w-[30px] h-[30px]' />
                  <Button
                    className='p-[1rem] text-[#ffffff] sm-sc:text-[12px]'
                    title='How to Play'
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Showcase;