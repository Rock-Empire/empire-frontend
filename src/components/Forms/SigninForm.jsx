import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { FaEye } from "react-icons/fa";

function SigninForm() {

  const [toggle, setToggle] = useState(false);

  const toggleBtn = () => {
    setToggle(!toggle);
    console.log("toggle");
  };

  return (
    <div>
      <form className=''>
        <div className='mb-[3rem]'>
          <label htmlFor='email'>
            Email <span className='text-[#ED3833]'>*</span>
          </label>
          <input
            className='w-[100%] border rounded-md text-[#D1D1D1] p-[0.5rem] mt-[7px]'
            type='tel'
          />
        </div>
        <div className='mb-[3rem]'>
          <label htmlFor='password'>
            Password <span className='text-[#ED3833]'>*</span>
          </label>
          <input
            className='w-[100%] border rounded-md text-[#D1D1D1] p-[0.5rem] mt-[7px]'
            type='password'
          />
          <FaEye
            className='absolute bottom-[21.5rem] right-[11rem] mini-sc:right-[2rem] mini-sc:bottom-[22.5rem] sm-sc:bottom-[16rem] sm-sc:right-[5rem]'
            onClick={toggleBtn}
          ></FaEye>
        </div>
        <div className='flex items-center gap-[13rem] sm-sc:gap-[3rem]'>
          <div className=''>
            <input type='checkbox' />{" "}
            <span>Remember me</span>
          </div>
          <div className=''>
            <Link to='/forgot-password' className=''>
              <p className='mt-[0.5rem] text-[#2D3748] text-[14px]'>
              Forgot Passowrd?
              </p>
            </Link>
          </div>
        </div>
        <div className='mt-[2rem]'>
          <input
            className='w-[100%] border rounded-md text-[#ffffff] bg-[#ED383399] p-[0.5rem]'
            type='submit'
            value='Sign in'
          />
        </div>
      </form>
    </div>
  )
}

export default SigninForm