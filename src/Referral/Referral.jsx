import React from "react";
import InviteFriends from "./InviteFriends";
import ReferAndEarn from "./ReferAndEarn";
import ShareReferral from "./ShareReferral";

function Referral() {
  return (
    <div className='pt-[5rem] pb-[2rem] bg-gray-400'>
      <div className='mr-[3rem] ml-[3rem] bg-white p-8 sm-sc:p-1 sm-sc:mr-[1rem] sm-sc:ml-[1rem] '>
        <ReferAndEarn />
        <InviteFriends />
        <ShareReferral />
      </div>
    </div>
  );
}

export default Referral;
