import React, { useRef } from "react";

function ShareReferral() {
  const inputRef = useRef(null);

  const copyText = (e) => {
    e.preventDefault()
    inputRef.current.select();
    document.execCommand("copy");
  };

  return (
    <div>
      <div className='pt-[5rem] pb-[3rem]'>
        <h1 className='pb-[1rem] text-[20px]'>Share referral Link</h1>
        <p className='pb-[1rem] text-[14px] '>
          You can share by copying the referral link or sharing it on social
          media
        </p>
        <div>
          <form>
            <input
              ref={inputRef}
              type='text'
              className='pt-[17px] pb-[17px] pl-[10px] pr-[10px] border-2 text-[12px] w-[600px] sm-sc:w-[200px] sm-sc:mb-[1rem]'
              placeholder='23yshr48r800-9'
            />
            <button
              onClick={copyText}
              className='bg-treColor1 pt-[17px] pb-[17px] pl-[56px] pr-[56px] text-[14px] cursor-pointer'
            >
              Copy
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ShareReferral;
