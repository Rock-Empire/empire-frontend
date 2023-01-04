import React from "react";
import Earn from "../assets/images/earn.png";
import Invitation from "../assets/images/invitation.png";
import Registration from "../assets/images/registration.png";
import Arrow1 from "../assets/images/Arrow 1.png";

function ReferAndEarn() {
  return (
    <div>
      <div className="leading-9 pb-[3rem] pt-[2rem]">
        <h1 className="text-[24px] font-600">Refer and Earn</h1>
        <p className="text-[14px] font-400">
          Invite your friends to Rock Empire and get a chance to play for free
        </p>
      </div>
      <div className='flex justify-center items-center text-center sm-sc:flex-col '>
        <div className=''>
          <div className="flex justify-center pb-2">
            <img src={Invitation} className='' alt='' />
          </div>

          <h3 className="text-[#15394F] text-[16px] font-bold pb-2">Send An Invitation</h3>
          <p className="text-[#141204] leading-6 text-[14px]">
            Send your referral link to friends and tell them about Rock Empire.
          </p>
        </div>
        <div className="flex justify-end items-end flex-col sm-sc:hidden">
          <img src={Arrow1} alt='' />
        </div>
        <div>
          <div className="flex justify-center pb-2">
            <img src={Registration} alt='' />
          </div>

          <h3 className="text-[#580000] text-[16px] font-bold pb-2">Registration</h3>
          <p className="text-[14px] text-[#141204] leading-6">Let them register to our service using the referal link sent.</p>
        </div>
        <div className="flex justify-end items-end flex-col sm-sc:hidden">
          <img src={Arrow1} alt='' />
        </div>
        <div>
          <div className="flex justify-center pb-2">
            <img src={Earn} alt='' />
          </div>

          <h3 className="text-[#090F26] text-[16px] font-bold pb-2">Send An Invitation</h3>
          <p className="text-[14px] text-[#141204] leading-6">Get a chance to play for free once your friends sign up.</p>
        </div>
      </div>
    </div>
  );
}

export default ReferAndEarn;
