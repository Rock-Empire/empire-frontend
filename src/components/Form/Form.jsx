import React, { useState } from 'react';
import { FaEye } from "react-icons/fa";

function Form() {

  const [toggle, setToggle] = useState(false)

  const toggleBtn = () => {
    setToggle(!toggle);
    console.log("toggle")
  }

  return (
    <div>
      <form className=''>
        <div className='flex gap-6'>
          <div className='w-[50%] mb-[1rem]'>
            <label htmlFor="firstName">First Name <span className='text-[#ED3833]'>*</span></label>
            <input className='w-[100%] border rounded-md text-[#D1D1D1] p-[0.5rem]' type="text" />
          </div>
          <div className='w-[50%] mb-[1rem]'>
            <label htmlFor="lastName">Last Name <span className='text-[#ED3833]'>*</span></label>
            <input className='w-[100%] border rounded-md text-[#D1D1D1] p-[0.5rem]' type="text" />
          </div>
        </div>
        <div className='mb-[1rem]'>
          <label htmlFor="phoneNumber">Phone Number <span className='text-[#ED3833]'>*</span></label>
          <input className='w-[100%] border rounded-md text-[#D1D1D1] p-[0.5rem]' type="tel" />
        </div>
        <div className='mb-[1rem]'>
          <label htmlFor="email">Email <span className='text-[#ED3833]'>*</span></label>
          <input className='w-[100%] border rounded-md text-[#D1D1D1] p-[0.5rem]' type="tel" />
        </div>
        <div className='mb-[1rem]'>
          <label htmlFor="dateOfBirth">Date of birth (MM/DD/YY)</label>
          <input className='w-[100%] border rounded-md text-[#D1D1D1] p-[0.5rem]' type="date" />
          <p>Must be 18 years and above</p>
        </div>
        <div className='mb-[1rem]'>
          <label htmlFor="password">Password <span className='text-[#ED3833]'>*</span></label>
          <input className='w-[100%] border rounded-md text-[#D1D1D1] p-[0.5rem]' type="password" />
          <FaEye
            className='absolute bottom-[10rem] right-[10rem] tablet-8:right-[2rem] xs-max:bottom-[-4.5rem] right-[-3rem]'
            onClick={toggleBtn}
          ></FaEye>
        </div>
        <div className='mt-[2rem]'>
          <input type="checkbox" /> <span>I agree to all the Terms and Privacy policy </span>
        </div>
        <div className='mt-[2rem]'>
          <input className='w-[100%] border rounded-md text-[#ffffff] bg-[#ED383399] p-[0.5rem]' type="submit" value="Create account" />
        </div>
      </form>
    </div>
  )
}

export default Form