import React from "react";
import { Link } from "react-router-dom";
import { HashLink as NavLinkPage } from "react-router-hash-link";
import DropDown1 from "../../assets/images/drop-down-img1.png";
import DropDown2 from "../../assets/images/drop-down-img2.png";
import DropDown3 from "../../assets/images/drop-down-img3.png";
// import PastWinners from '../LandingPageComponents/Winners/Winners'

function RaffleDropDown() {
  return (
    <React.Fragment>
      <div className='w-[1000px] text-[14px] z-20 absolute right-[20%] font-normal m-auto grid grid-cols-3 gap-x-[1rem] items-center bg-[#ffffff] p-[2rem] mt-[-10px] sm-sc:w-[400px] sm-sc:grid-cols-1 sm-sc:gap-2 sm-sc:mt-[-16rem] sm-sc:mr-[-4rem] '>
      {/* <div className='w-[1000px] z-20 text-[14px] absolute right-[20%] font-normal m-auto grid grid-cols-3 gap-x-[1rem] items-center bg-[#ffffff] p-[2rem] mt-[-10px] sm-sc:grid-cols-1 sm-sc:gap-y-[1rem] sm-sc:relative sm-sc:top-[-13rem] sm-sc:right-[-1.6rem] sm-sc:w-[320px] sm-sc:overflow-x-hidden sm-sc:p-[.5rem] sm-sc:text-[12px] sm-sc:h-[100%] mini-sc:left-[1%] mini-sc:w-[800px]'> */}
        <Link to='/play-ticket'>
          <div className='flex gap-[1rem] '>
            <div>
              <img src={DropDown2} alt='' />
            </div>
            <div>
              <h3>Play Raffle</h3>
              <p>Play and win amazing prices</p>
            </div>
          </div>
        </Link>
        <Link to='/ticket-type'>
          <div className='flex gap-[1rem]'>
            <div>
              <img src={DropDown3} alt='' />
            </div>
            <div>
              <h3>Ticket Type</h3>
              <p>See all ticket type</p>
            </div>
          </div>
        </Link>
        <Link to='/current-draws'>
          <div className='flex gap-[1rem]'>
            <div>
              <img src={DropDown1} alt='' />
            </div>
            <div>
              <h3>Current Draws</h3>
              <p>See all ticket in play</p>
            </div>
          </div>
        </Link>
        <NavLinkPage exact to='#pastWinners' smooth duration='500ms'>
          <div className='flex gap-[1rem] mt-[1rem] sm-sc:mt-[0rem]'>
            <div>
              <img src={DropDown1} alt='' />
            </div>
            <div>
              <h3>Past Winners</h3>
              <p>See all past winners</p>
            </div>
          </div>
        </NavLinkPage>
      </div>
    </React.Fragment>
  );
}

export default RaffleDropDown;
