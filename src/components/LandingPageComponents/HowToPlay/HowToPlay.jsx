import React from "react";

function HowToPlay() {
  return (
    <React.Fragment>
      <div className='flex flex-col text-[#141204] items-center text-center align-center justify-center mt-[7rem]'>
        <div className='leading-4'>
          <h1 className='text-[34px] underline decoration-2 decoration-treColor1 text-[#141204] sm-sc:text-[28px]'>
            How to Play
          </h1>
          <p className='text-[20px] leading-8 pt-[2rem] pb-[2rem] text-[#595959] sm-sc:text-[16px] sm-sc:w-[350px]'>
            Choose The Rock Empire by playing any or more of our tickets, <br className='hidden' />
            purchase and you can be one of the lucky winners
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HowToPlay;
