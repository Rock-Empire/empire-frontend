import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import LotteryNumber from "./LotteryNumber";

const Congratulations = () => {
  let numbers = LotteryNumber.map((a) => {
    return Number(a);
  });

  return (
    <div className='bg-[#333] w-[500px] m-auto h-[800px] justify-center flex flex-col gap-4 text-center mt-8 sm-sc:w-[400px] '>
      <h1 className='text-[34px] sm-sc:text-[24px]'>Congratulations!</h1>
      <p className='text-[14px] p-3 leading-9 sm-sc:text-[12px]'>
        Your Raffle Ticket has been Generated. Kindly note that this Ticket
        Number has also been sent to your email.
      </p>
      <div className='flex gap-1 text-center items-center justify-center text-[14px] sm-sc:text-[12px]'>
        <p className='text-white bg-treColor1 p-3 rounded-[50%]'>
          {numbers[0]}
        </p>{" "}
        <p className='text-white bg-treColor1 p-3 rounded-[50%]'>
          {numbers[1]}
        </p>{" "}
        <p className='text-white bg-treColor1 p-3 rounded-[50%]'>
          {numbers[2]}
        </p>{" "}
        <p className='text-white bg-treColor1 p-3 rounded-[50%]'>
          {numbers[3]}
        </p>{" "}
        <p className='text-white bg-treColor1 p-3 rounded-[50%]'>
          {numbers[4]}
        </p>{" "}
        <p className='text-treColor1 bg-white p-3 rounded-[50%]'>
          {numbers[5]}
        </p>
      </div>
      <Link to='/'>
        <Button
          title='Go back to Home Page'
          className='bg-treColor1 w-[60%] mt-[1rem] p-[1rem] text-[#ffffff] rounded-md text-[14px] sm-sc:w-[100%] sm-sc:mb-[1rem]'
        />
      </Link>
    </div>
  );
};

export default Congratulations;
