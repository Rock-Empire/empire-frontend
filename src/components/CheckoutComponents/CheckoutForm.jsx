import React, { useState } from "react";
import Button from "../Button";

function CheckoutForm() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    HowDidYouHearAboutUs: "",
  });
  const [count, setCount] = useState(1);
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleIncrement = (e) => {
    e.preventDefault()
    setCount((count) => ( count + 1 ));
  };

  const handleDecrement = (e) => {
    e.preventDefault();
    if(count === 1) return;
    setCount((count) => ( count - 1 ));
  };

  const Form = (
    <form className='flex flex-col font-normal text-[14px] mt-[4rem]'>
      <div className='flex justify-around sm-sc:flex-col mini-sc:flex-col'>
        <div className='border-2 p-6 rounded-md sm-sc:w-[400px] mini-sc:w-[550px] xs:w-[300px]'>
          <div className='w-[543px] h-[100%] border-2 p-8 rounded-md sm-sc:w-[350px] mini-sc:w-[500px] xs:w-[250px] '>
            <div className='flex gap-[1rem]'>
              <div>
                <label htmlFor='firstName'>
                  First Name <span className='text-treColor1'>*</span>
                </label>
                <input
                  className='p-[0.6rem] mt-[10px] mb-[10px] w-[100%] border border-black rounded-md'
                  type='text'
                  name='firstName'
                  onChange={handleChange}
                  value={input.firstName}
                  placeholder=''
                />
              </div>
              <div>
                <label htmlFor='lastName'>
                  Last Name <span className='text-treColor1'>*</span>
                </label>
                <input
                  className='p-[0.6rem] mt-[10px] mb-[10px] w-[100%] border border-black rounded-md'
                  type='text'
                  name='lastName'
                  onChange={handleChange}
                  value={input.lastName}
                  placeholder=''
                />
              </div>
            </div>
            <label htmlFor='phoneNumber'>
              Phone Number <span className='text-treColor1'>*</span>
            </label>
            <input
              className='p-[0.6rem] mt-[10px] mb-[10px] w-[100%] border border-black rounded-md'
              type='tel'
              name='phoneNumber'
              onChange={handleChange}
              value={input.phoneNumber}
              placeholder=''
            />
            <label htmlFor='email'>
              email <span className='text-treColor1'>*</span>
            </label>
            <input
              className='p-[0.6rem] mt-[10px] mb-[10px] w-[100%] border border-black rounded-md'
              type='email'
              name='email'
              onChange={handleChange}
              value={input.email}
              placeholder=''
            />
            <label htmlFor='emHowDidYouHearAboutUsail'>
              How Did You Hear About Us{" "}
              <span className='text-treColor1'>*</span>
            </label>
            <textarea
              className='p-[0.6rem] mt-[10px] mb-[10px] w-[100%] border border-black rounded-md'
              type='text'
              name='HowDidYouHearAboutUs'
              onChange={handleChange}
              value={input.HowDidYouHearAboutUs}
              placeholder=''
            />
            <div>
              <input
                className='p-[0.5rem] border border-black rounded-md'
                type='checkbox'
                name='terms'
                onChange={handleChange}
                value={input.terms}
                placeholder=''
              />
              <span className='pr-[10px]'>
                Save details to view history of your purchase
              </span>
            </div>
          </div>
        </div>
        <div className='sm-sc:pt-[2rem]'>
          <div className=' font-400 '>
            <div>
              <p>Raffle Type: Win N10,000 weekly </p>
            </div>
            <div className=''>
              <h1>
                Quantity: <span className=''>x {count}</span>
              </h1>
              <div className='flex gap-2'>
                <button
                  className='bg-[#FEE9E1] text-treColor1 p-2'
                  onClick={handleDecrement}
                >
                  -
                </button>
                <button
                  className='bg-[#FEE9E1] text-treColor1 p-2'
                  onClick={handleIncrement}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div>
            <Button
              title='Proceed to checkout'
              className='bg-treColor1 w-[100%] mt-[1rem] p-[1rem] text-[#ffffff] rounded-md text-[16px]sm-sc:w-[100%] sm-sc:mb-[1rem]'
              type='submit'
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </form>
  );

  return <div>{Form}</div>;
}

export default CheckoutForm;
