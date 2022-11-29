import React from 'react';
import GoogleImg from '../../assets/images/Vector.png';
import Form from '../Form/Form'

function Signup() {
  return (
    <div>
      <div className='mb-[3rem] mt-[1rem]'>
        <div className='mt-[2rem] block text-center text-[#1D1D1D]'>
          <h1 className='mt-[2rem] text-3xl'>Create account</h1>
          <p className='mt-[0.5rem] text-[#2D3748]'>Already have an account? Log In</p>
        </div>
        <div className='mt-[4rem] block text-center'>
          <button className='border-2 w-[100%] border-[#ED3833] mb-[1rem]'><span className='flex justify-center gap-4 p-[1rem]'><img className='w-[32px] h-[21px]' src={GoogleImg} alt="" />Sign Up with Google</span></button>
          <div className='mt-[2rem] flex w-[550px] gap-4'>
            <hr className='w-[40%]' /><h1 className='mt-[-0.7rem]'>OR</h1><hr className='w-[40%]' />
          </div>
        </div>
      </div>
      <Form />
    </div>
  )
}

export default Signup