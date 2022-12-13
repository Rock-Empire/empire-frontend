import React from "react";
import StoryImg from "../../assets/images/story.png";
import VisionImg from "../../assets/images/vision.png";
import MissionImg from "../../assets/images/mission.png";

function ValueStatement() {
  return (
    <div className='text-center w-[1400px] font-normal m-auto mb-[1rem] h-[800px] sm-sc:w-[350px] mini-sc:w-[700px] lg-sc:w-[1200px]'>
      <h1 className='text-[34px] underline decoration-2 decoration-treColor1 pt-[3rem] pb-[2rem] sm-sc:text-[24px]'>
        Our Value Statements
      </h1>
      <div className='flex gap-4 sm-sc:flex-col '>
        <div className='bg-[#ffffff] flex flex-col justify-center items-center rounded-md w-[100%] sm-sc:pb-[2rem]'>
          <div className='flex justify-center sm-sc:mt-[3rem]'>
            <img className='' src={StoryImg} alt='' />
          </div>
          <h1 className='text-[18px] pt-[1rem] pb-[1rem] font-bold sm-sc:text-[14px]'>
            Our Story
          </h1>
          <p className='pl-[4rem] pr-[4rem] text-[#595959] text-[14px] sm-sc:text-[12px]'>
            This sustainable approach to fundraising means that nonprofits can
            spend less time and money raising funds, and instead focus on
            serving the needs of their communities. Fundamentally, we believe
            the traditional charitable fundraising model is broken. Nonprofits
            are held back from investing in marketing, tech and the top talent
            that could transform the scale of how they raise funds. Instead they
            rely on expensive galas and outdated methods to reach their goals.
            <br /> <br />
            Think there’s a better way? So do we.
          </p>
        </div>
        <div className='flex flex-col gap-4 w-[100%]'>
          <div className='bg-[#ffffff] h-[300px] flex flex-col justify-center items-center text-center rounded-md w-[100%] mini-sc:h-[400px]'>
            <div className='flex justify-center sm-sc:mt-[3rem]'>
              <img src={VisionImg} alt='' />
            </div>
            <h1 className='text-[18px] pt-[1rem] pb-[1rem] font-bold sm-sc:text-[14px]'>
              Our Vision
            </h1>
            <p className='pl-[4rem] text-[#595959] pr-[4rem] pb-[3rem] text-[14px] sm-sc:text-[12px]'>
              A little one shall become a thousand, and a small one a strong
              nation: I the LORD will hasten it in his time. – Isaiah 60:22 We
              are in the business of changing lives. We are blessed, and we want
              to share that blessing with the people of Nigeria.
            </p>
          </div>
          <div className='bg-[#ffffff] h-[300px] flex flex-col justify-center items-center text-center rounded-md mini-sc:h-[400px]'>
            <div className='flex justify-center sm-sc:mt-[3rem]'>
              <img src={MissionImg} alt='' />
            </div>
            <h1 className='text-[18px] pt-[1rem] pb-[1rem] font-bold sm-sc:text-[14px]'>
              Our Mission
            </h1>
            <p className='pl-[4rem] pr-[4rem] text-[#595959] pb-[3rem] text-[14px] sm-sc:text-[12px]'>
              Our mission is to contribute our quota in promoting raffle and
              lottery activities in Nigeria, to help poor Nigerians change their
              financial status, provide job opportunities for teaming unemployed
              population in Nigeria. We will also give majority of our profit to
              NGO’s in need of funds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ValueStatement;
