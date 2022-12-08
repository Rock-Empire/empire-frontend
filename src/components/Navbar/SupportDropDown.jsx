import React from "react";
import { Link } from "react-router-dom";
import DropDown1 from "../../assets/images/drop-down-img1.png";
import DropDown2 from "../../assets/images/drop-down-img2.png";

function SupportDropDown() {
  return (
    <React.Fragment>
      <div className='w-[1000px] text-[14px] absolute right-[20%] font-normal m-auto grid grid-cols-3 gap-x-[1rem] items-center bg-[#ffffff] p-[2rem] mt-[-10px] sm-sc:grid-cols-1 sm-sc:gap-y-[1rem] sm-sc:relative sm-sc:top-[-13rem] sm-sc:right-[-1.6rem] sm-sc:w-[320px] sm-sc:overflow-x-hidden sm-sc:p-[.5rem] sm-sc:text-[12px] sm-sc:h-[100px] mini-sc:left-[5%] mini-sc:w-[800px] '>
        <Link to='/contact-us'>
          <div className='flex gap-[1rem]'>
            <div>
              <img src={DropDown1} alt='' />
            </div>
            <div>
              <h3>Contact Us</h3>
              <p>Play and win amazing prices</p>
            </div>
          </div>
        </Link>
        <Link to='/FAQ'>
          <div className='flex gap-[1rem] w-[400px]'>
            <div>
              <img src={DropDown2} alt='' />
            </div>
            <div>
              <h3>FAQ</h3>
              <p>Get answer to all frequently asked questions.</p>
            </div>
          </div>
        </Link>
      </div>
    </React.Fragment>
  );
}

export default SupportDropDown;
