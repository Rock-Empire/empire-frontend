import React from "react";
import Img1 from "../../assets/images/integrity.png";
import Img2 from "../../assets/images/quality.png";
import Img3 from "../../assets/images/passion.png";
import Img4 from "../../assets/images/expertise.png";
import Img5 from "../../assets/images/teamwork.png";

function WhatWeStandFor() {
  return (
    <div className='mt-[4rem] text-center font-normal sm-sc:mt-[-10rem] mini-sc:mt-[-17rem]'>
      <h1 className='text-[32px] underline decoration-2 decoration-treColor1 sm-sc:pb-[2rem] sm-sc:text-[24px] mini-sc:pb-[2rem]'>What We Stand For</h1>
      <div className='flex w-[1300px] m-auto gap-[1rem] sm-sc:flex-col sm-sc:w-[350px] mini-sc:w-[900px]'>
        <div className='p-[1rem] bg-[#ffffff] h-[300px] flex flex-col justify-center items-center text-center rounded-md w-[100%]'>
          <div className='flex justify-center'>
            <img className='w-[64px] h-[57px]' src={Img1} alt='' />
          </div>
          <h1 className='pt-[2rem] text-[18px] pb-[1.5rem] font-bold'>Integrity</h1>
          <p className='text-[14px] text-[#807D7D]'>
            We pride ourself in our transparency, which we believe is the most
            important in the way that we engage with people.
          </p>
        </div>
        <div className='p-[1rem] bg-[#ffffff] h-[300px] flex flex-col justify-center items-center text-center rounded-md w-[100%]'>
          <div className='flex justify-center'>
            <img className='w-[64px] h-[57px]' src={Img2} alt='' />
          </div>
          <h1 className='pt-[2rem] text-[18px] pb-[1.5rem] font-bold'>Quality</h1>
          <p className='text-[14px] text-[#807D7D]'>
            We pride ourself in our transparency, which we believe is the most
            important in the way we engage with people.
          </p>
        </div>
        <div className='p-[1rem] bg-[#ffffff] h-[300px] flex flex-col justify-center items-center text-center rounded-md w-[100%]'>
          <div className='flex justify-center'>
            <img className='w-[64px] h-[57px]' src={Img3} alt='' />
          </div>
          <h1 className='pt-[2rem] text-[18px] pb-[1.5rem] font-bold'>Passion</h1>
          <p className='text-[14px] text-[#807D7D]'>
            We pride ourself in our transparency, which we believe is the most
            important in the way we engage with people.
          </p>
        </div>
      </div>
      <div className='flex w-[800px] m-auto gap-[1rem] mt-[1rem] sm-sc:flex-col sm-sc:w-[350px] mini-sc:w-[600px]'>
        <div className='p-[1rem] bg-[#ffffff] h-[300px] flex flex-col justify-center items-center text-center rounded-md w-[100%]'>
          <div className='flex justify-center'>
            <img className='w-[64px] h-[57px]' src={Img4} alt='' />
          </div>
          <h1 className='pt-[2rem] text-[18px] pb-[1.5rem] font-bold'>Expertise</h1>
          <p className='text-[14px] text-[#807D7D]'>
            We pride ourself in our transparency, which we believe is the most
            important in the way we engage with people.
          </p>
        </div>
        <div className='p-[1rem] bg-[#ffffff] h-[300px] flex flex-col justify-center items-center text-center rounded-md w-[100%]'>
          <div className='flex justify-center'>
            <img className='w-[64px] h-[57px]' src={Img5} alt='' />
          </div>
          <h1 className='pt-[2rem] pb-[1.5rem] text-[18px] font-bold'>Teamwork</h1>
          <p className='text-[14px] text-[#807D7D]'>
            We pride ourself in our transparency, which we believe is the most
            important in the way we engage with people.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhatWeStandFor;
