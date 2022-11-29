import React from 'react';
import Signup from '../components/signout/Signup';
import Vector from '../assets/images/Vector (1).png';
import Logo from '../assets/images/Rectangle 25.png';
import BackgroundPic from '../assets/images/backgroundImage.png';


function SignupPage() {
  return (
    <div className='flex gap-8 h-[100vh] font-normal xs-max:gap-1'>
      <div className='w-[50%] pl-[25px] xs-max:hidden' style={{backgroundImage: `url(${BackgroundPic})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
        <img className='w-[50px] ml-[10px] mt-[2rem] mb-[4rem]' src={Vector} alt="Back arrow" />
        <img className='w-[110px]' src={Logo} alt="Company logo" />
      </div>
      <div className='w-[500px] m-auto xs-max:w-[450px]'>
        <Signup />
      </div>
    </div>
  )
}

export default SignupPage;