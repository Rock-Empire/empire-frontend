import React from "react";
// import MailBg from "../../assets/images/subscription image.png";
import Button from "../Button";

function MailList() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed...");
  };

  const myStyle = {
    backgroundImage: "url('https://tre.ng/wp-content/uploads/2022/12/subscription-image.png')",
    // height: "40vh",
    // zIndex: "1",
    // marginTop: "70px",
    // backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
  };

  return (
    <React.Fragment>
      <div
        className='flex flex-col text-center w-full h-[40vh] bg-no-repeat font-normal bg-cover text-center text-[#ffffff] flex justify-center items-center mt-[3rem]'
        style={myStyle}
      >
        <h1 className='text-[34px] text-[#ffffff] sm-sc:text-[24px]'>
          Ready to get Updated?
        </h1>
        <p className='text-[16px] pt-[1rem] text-[#ffffff] font-normal sm-sc:text-[12px]'>
          Subscribe to our email list to get updates on lottery as its hot.
        </p>
        <form
          className='flex items-center justify-center pt-[2rem] pb-[3rem] sm-sc:gap-[1rem]'
          onSubmit={handleSubmit}
        >
          <input
            className='text-[16px] p-[0.5rem] w-[400px] border-2 border-black sm-sc:w-[50%]'
            type='email'
            placeholder='Email Address'
          />
          <Button
            type='submit'
            className='bg-[#E6EAFB] p-[0.5rem]'
            title='Subscribe'
          />
        </form>
      </div>
    </React.Fragment>
  );
}

export default MailList;
