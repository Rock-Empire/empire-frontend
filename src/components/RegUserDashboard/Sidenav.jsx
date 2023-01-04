import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Sidenav() {
  const [bg, setBg] = useState({
    personalDetails: true,
    password: false,
  });
  return (
    <div className='z-20 absolute bg-[white] h-[100%] flex flex-col pt-12 ml-[2rem] w-[22.8%]  decoration-none mt-[5rem] sm-sc:hidden sm-sc:ml-[0rem] mini-sc:ml-[0rem]'>
      <div className='pt-[4rem] flex items-center h-[300px] bg-gray-400 m-3'>
        <input
          className='p-8'
          type='file'
          placeholder='Click to change photo'
        />
      </div>
      <div className='pt-[4rem]'>
        <Link to='/user-profile' className='mt-[8rem]'>
          <div
            className={`${
              bg.dashboard
                ? "text-[16px] bg-[#FEE9E1] rounded-md p-[15px]"
                : "text-[16px] p-[15px]"
            }`}
            onClick={() =>
              setBg({
                ...bg,
                personalDetails: true,
                password: false,
              })
            }
          >
            Personal Details
          </div>
        </Link>
        <NavLink to='/user-profile/reset-password' className=''>
          <div
            className={`${
              bg.tickets
                ? "text-[16px] bg-[#FEE9E1] rounded-md p-[15px]"
                : "text-[16px] bg-[] p-[15px]"
            }`}
            onClick={() =>
              setBg({
                personalDetails: false,
                password: true,
              })
            }
          >
            Password Reset
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidenav;
