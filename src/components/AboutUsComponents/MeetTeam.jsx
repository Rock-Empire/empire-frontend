import React from "react";
import WinnerBgImg from "../../assets/images/aboutimg1.png";
import WinnerBgImg1 from "../../assets/images/aboutimg2.png";
import WinnerBgImg2 from "../../assets/images/aboutimg3.png";

function MeetTeam() {
  return (
    <React.Fragment>
      <div className='text-center mt-[3rem] h-[680px] m-auto sm-sc:w-[350px] sm-sc:h-[1200px] sm-sc:mt-[35rem] mini-sc:w-[700px] mini-sc:h-[1000px] mini-sc:mt-[22rem] lg-sc:w-[1200px] mini-sc:mt-[12rem] '>
        <h1 className='underline decoration-2 decoration-treColor1 text-[34px] font-normal sm-sc:text-[24px]'>Meet the Team</h1>
        <div className='flex w-[1300px] m-auto gap-[1rem] pt-[2rem] sm-sc:flex-col sm-sc:w-[350px] mini-sc:w-[600px]'>
          <div className='flex flex-col gap-[1rem] w-[100%] h-[600px]'>
            <div className='w-[100%] h-[100%]'>
              <img className='w-[100%] h-[300px]' src={WinnerBgImg2} alt="" />
            </div>
            <div className='w-[100%] h-[100%]'>
              <img className='w-[100%] h-[300px]' src={WinnerBgImg1} alt="" />
            </div>
          </div>
          <div className='w-[100%] h-[200%] sm-sc:mt-[1rem]'>
            <img className='w-[100%] h-[616px] sm-sc:h-[300px]' src={WinnerBgImg} alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MeetTeam;
