import React from "react";
import { Link } from "react-router-dom";
import Signup from "../components/Signup/Signup";
import Vector from "../assets/images/Vector (1).png";
import Logo from "../assets/images/Rectangle 25.png";
import BackgroundPic from "../assets/images/backgroundImage.png";

function SignupPage() {

  const handleBack = () => {
    window.history.back();
  }
  
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
        <Link to={''}>
          <img
            className='w-[50px] ml-[10px] mt-[2rem] mb-[4rem]'
            src={Vector}
            alt='Back arrow'
            onClick={handleBack}
          />
        </Link>
        <img className='w-[110px]' src={Logo} alt='Company logo' />
      </div>
      <div className='w-[500px] m-auto sm-sc:w-[300px]'>
        <Signup />
      </div>
    </div>
  );
}

export default SignupPage;
