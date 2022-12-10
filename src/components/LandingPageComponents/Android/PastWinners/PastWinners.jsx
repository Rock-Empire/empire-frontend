import React from "react";
import PastWinnersImage1 from "../../../../assets/images/winner1.png";
import PastWinnersImage2 from "../../../../assets/images/winner2.png";
import PastWinnersImage3 from "../../../../assets/images/winner3.png";

function PastWinners() {
  return (
    <React.Fragment>
      <div className='text-center mt-[4rem] font-normal' id='pastWinners'>
        <h1 className='text-[34px] underline decoration-treColor1 decoration-2 sm-sc:text-[24px]'>See Our Past Winners</h1>
        <div className='grid grid-cols-3 pt-[3rem] w-[900px] m-auto gap-[2rem] sm-sc:grid-cols-1 sm-sc:m-auto sm-sc:w-[300px] mini-sc:w-[900px] mini-sc:gap-[1rem]'>
          <div
            className='flex items-end text-center '
            style={{
              backgroundImage: `url(${PastWinnersImage3})`,
              height: "300px",
              width: '300px',
              // zIndex: "1",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className='bg-[#E6EAFB] w-full p-2 flex items-end text-start justify-around'>
              <div className='sm-sc:text-[14px]'>
                <h3>Adetutu Dayo</h3>
                <p>24th July, 2022</p>
              </div>
              <div>
                <h2 className='text-[24px]'>N250,000</h2>
              </div>
            </div>
          </div>
          <div className='flex items-end text-center'
          style={{
            backgroundImage: `url(${PastWinnersImage2})`,
            height: "300px",
            width: '300px',
            // zIndex: "1",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          >
            <div className='bg-[#E6EAFB] w-full p-2 flex items-end text-start justify-around'>
              <div className='sm-sc:text-[14px]'>
                <h3>Adetutu Dayo</h3>
                <p>24th July, 2022</p>
              </div>
              <div>
                <h2 className='text-[24px]'>N250,000</h2>
              </div>
            </div>
          </div>
          <div className='flex items-end text-center'
          style={{
            backgroundImage: `url(${PastWinnersImage1})`,
            height: "300px",
            width: '300px',
            // zIndex: "1",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          >
            <div className='bg-[#E6EAFB] w-full p-2 flex items-end text-start justify-around relative bottom-0'>
              <div className='sm-sc:text-[14px]'>
                <h3>Adetutu Dayo</h3>
                <p>24th July, 2022</p>
              </div>
              <div>
                <h2 className='text-[24px]'>N250,000</h2>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 w-[750px] m-auto mt-[1rem] sm-sc:grid-cols-1 sm-sc:m-auto sm-sc:w-[300px] sm-sc:gap-8 sm-sc:pt-[2rem] mini-sc:w-[800px]'>
          <div className='flex items-end text-center ml-[4rem] sm-sc:ml-[0rem]'
          style={{
            backgroundImage: `url(${PastWinnersImage2})`,
            height: "300px",
            width: '300px',
            // zIndex: "1",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          >
            <div className='bg-[#E6EAFB] w-full p-2 flex items-end text-start justify-around bottom-0'>
              <div className='sm-sc:text-[14px]'>
                <h3>Adetutu Dayo</h3>
                <p>24th July, 2022</p>
              </div>
              <div>
                <h2 className='text-[24px]'>N250,000</h2>
              </div>
            </div>
          </div>
          <div className='flex items-end text-center'
          style={{
            backgroundImage: `url(${PastWinnersImage3})`,
            height: "300px",
            width: '300px',
            // zIndex: "1",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          >
            <div className='bg-[#E6EAFB] w-full p-2 flex items-end text-start justify-around relative bottom-0'>
              <div className='sm-sc:text-[14px]'>
                <h3>Adetutu Dayo</h3>
                <p>24th July, 2022</p>
              </div>
              <div>
                <h2 className='text-[24px]'>N250,000</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default PastWinners;
