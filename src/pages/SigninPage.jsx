import React from 'react';
import SignIn from '../components/signin/Signin';
import BackgroundPic from '../assets/images/login-image.png';
import Vector from "../assets/images/Vector (1).png";
import Logo from "../assets/images/Rectangle 25.png";

function Signin() {
  return (
    <div className='flex gap-8 h-[100vh] font-normal sm-sc:gap-1'>
      <div
        className='w-[50%] pl-[25px] sm-sc:hidden'
        style={{
          backgroundImage: `url(${BackgroundPic})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <img
          className='w-[50px] ml-[10px] mt-[2rem] mb-[4rem]'
          src={Vector}
          alt='Back arrow'
        />
        <img className='w-[110px]' src={Logo} alt='Company logo' />
      </div>
      <div className='w-[500px] m-auto sm-sc:w-[300px]'>
        <SignIn />
      </div>
    </div>
  )
}

export default Signin