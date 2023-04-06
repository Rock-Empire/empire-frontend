import React from 'react';
import { Link } from 'react-router-dom';
import SigninForm from '../Forms/SigninForm';
import GoogleImg from "../../assets/images/Vector.png";

function Signin() {

  const googleSignIn = () => {
    console.log('google sign in')
  }

  return (
    <>
      <div className='text-center mb-[3rem]'>
        <h1 className='text-[24px]'>Login to Get Started</h1>
        <div className=''>
          <Link to='/sign-up' className=''>
            <p>Don’t have an account? Sign Up</p>
          </Link>
        </div>
        <div className='mt-[1rem] block text-center'>
          <button onClick={googleSignIn} className='border-2 w-[100%] border-[#ED3833] mb-[1rem]'>
            <span className='flex justify-center gap-4 p-[1rem]'>
              <img className='w-[32px] h-[21px]' src={GoogleImg} alt='' />
              Sign in with Google
            </span>
          </button>
        </div>
      </div>
      <SigninForm />
    </>
  )
}

export default Signin;
