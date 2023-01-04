import React from "react";

function InviteFriends() {

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
  return (
    <div>
      <div className="pt-[5rem]">
        <h1 className="pb-[1rem] text-[20px]">Invite your friends</h1>
        <p className="pb-[1rem] text-[14px] ">
          Insert your friends email addresses and send them invitation to join
          Rock Empire
        </p>
        <div>
          <form onSubmit={handleSubmit}>
            <input type='email' className=" pt-[17px] pb-[17px] pl-[10px] pr-[10px] border-2 text-[12px] w-[600px] sm-sc:w-[200px] sm-sc:mb-[1rem]" multiple />
            <input type='submit' value='Send' className="bg-treColor1 pt-[17px] pb-[17px] pl-[56px] pr-[56px] text-[14px] cursor-pointer" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default InviteFriends;
