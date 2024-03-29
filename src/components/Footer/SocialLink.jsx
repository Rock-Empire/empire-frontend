import React from "react";
import Facebook from "../../assets/images/facebook.png";
import Twitter from "../../assets/images/Twitter.png";
import Instagram from "../../assets/images/instagram.png";
import LinkedIn from "../../assets/images/linkedin.png";

function SocialLink() {
  return (
    <React.Fragment>
      <div className='w-[1400px] m-auto mb-[1rem] sm-sc:w-[350px] mini-sc:w-[700px] lg-sc:w-[1100px] xs:w-[300px]'>
        <div
          className='mt-[1rem] mini-sc:w-[600px]'
          style={{ borderTop: "1px solid #ED3833", width: "100%" }}
        ></div>
        <div className='flex gap-[40rem] sm-sc:gap-3 items-center w-[1200px] m-auto mt-[1rem] sm-sc:w-[350px] mini-sc:w-[700px] lg-sc:w-[1000px] xs:flex-col'>
          <div>
            <p className='text-[16px] sm-sc:text-[12px] font-normal'> © Copyright {new Date().getFullYear()} - The Rock Empire.﻿</p>
          </div>
          <div>
            <ul className='flex justify-center gap-4 items-center sm-sc:gap-2'>
              <li>
                <a href='/'>
                  <img
                    className='w-[25px] cursor-pointer sm-sc:w-[20px]'
                    src={Facebook}
                    alt=''
                  />
                </a>
              </li>
              <li>
                <a href='/'>
                  <img
                    className='w-[25px] cursor-pointer sm-sc:w-[20px]'
                    src={Twitter}
                    alt=''
                  />
                </a>
              </li>
              <li>
                <a href='/'>
                  <img
                    className='w-[25px] cursor-pointer sm-sc:w-[20px]'
                    src={Instagram}
                    alt=''
                  />
                </a>
              </li>
              <li>
                <a href='/'>
                  <img
                    className='w-[25px] cursor-pointer sm-sc:w-[20px]'
                    src={LinkedIn}
                    alt=''
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SocialLink;
