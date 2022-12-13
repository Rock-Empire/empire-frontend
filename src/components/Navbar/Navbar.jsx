import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GrFormDown, GrFormUp } from "react-icons/gr";
import { ImMenu } from "react-icons/im";
import Logo from "../../assets/images/empire-logo.png";
import RaffleDropDown from "./RaffleDropDown";
import SupportDropDown from "./SupportDropDown";
import Button from "../Button";
// import NavLinksRaffle from './NavLinksRaffle';

function Navbar() {
  const [showRaffleDropDown, setShowRaffleDropDown] = useState(false);
  const [showSupportDropDown, setShowSupportDropDown] = useState(false);
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  const handleRaffleDropDown = () => {
    setShowRaffleDropDown(!showRaffleDropDown);
    setShowSupportDropDown(false);
  };

  const handleSupportDropDown = () => {
    setShowSupportDropDown(!showSupportDropDown);
    setShowRaffleDropDown(false);
  };

  const handleHamburgerMenu = () => setShowHamburgerMenu(!showHamburgerMenu);

  return (
    <React.Fragment>
      <div className='sm-sc:bg-[#FFFFFC] z-20 text-[#141204] sm-sc:absolute sm-sc:right-0 sm-sc:left-0 mini-sc:absolute mini-sc:right-0 mini-sc:left-0'>
        <div className=''>
          <div className='hidden sm-sc:flex sm-sc:relative sm-sc:justify-between sm-sc:align-center'>
            <div className=''>
              <ImMenu
                onClick={handleHamburgerMenu}
                className='w-[50px] h-[50px] text-[#ED3833] true'
              />
            </div>
            <Link to='/'>
              <div>
                <img
                  className='sm-sc:w-[150px] sm-sc:h-[40px] sm-sc:text-[#ED3833] sm-sc:mt-[5px] '
                  src={Logo}
                  alt='Company logo'
                />
              </div>
            </Link>
          </div>
          <div
            className={
              showHamburgerMenu
                ? showHamburgerMenu
                : "flex justify-around font-normal items-center text-[14px] bg-[#FFFFFC] sm-sc:hidden"
            }
          >
            <Link to='/'>
              <div>
                <img className='sm-sc:hidden' src={Logo} alt='Company logo' />
              </div>
            </Link>
            <nav className=' sm-sc:mt-[1rem]'>
              <ul className='flex gap-[3rem] sm-sc:block sm-sc:w-[100%] sm-sc:gap-y-[1rem] sm-sc:font-normal sm-sc:mb-[1rem] sm-sc:ml-[5px] mini-sc:gap-[1rem] '>
                <Link to='/about-us' className='hover:underline decoration-treColor1 decoration-1'>
                  <li>About Us</li>
                </Link>
                {/* <div>
                <NavLinksRaffle />
              </div> */}
                <div
                  onClick={handleRaffleDropDown}
                  className='flex gap-[1rem] items-center cursor-pointer sm-sc:mt-[1rem] mini-sc:gap-[1rem]'
                >
                  <li>Join Raffle</li>
                  <span>
                    { !showRaffleDropDown ? <GrFormDown /> : <GrFormUp/>}
                  </span>
                </div>
                <div
                  onClick={handleSupportDropDown}
                  className='flex gap-[1rem] items-center cursor-pointer sm-sc:mt-[1rem]'
                >
                  <li>Support</li>
                  <span>
                  { !showSupportDropDown ? <GrFormDown /> : <GrFormUp/>}</span>
                </div>
                <Link to='/blog'>
                  <li className='sm-sc:mt-[1rem]'>Blog</li>
                </Link>
              </ul>
            </nav>
            <div className='flex justify-center gap-4 items-center mr-[3rem] sm-sc:mt-[3rem] sm-sc:ml-[5px] sm-sc:pb-[1rem]'>
              <Link to='/sign-in'>
                <Button className='mr-[1rem]' title='Login' />
              </Link>
              <Link to='/sign-up'>
                <Button
                  className='bg-treColor1 rounded-md text-[#ffffff] pr-[1rem] pl-[1rem] pt-[1rem] pb-[1rem]'
                  title='Create Account'
                />
              </Link>
            </div>
          </div>
          <hr className='w-[100%] sm-sc:hidden' />
        </div>
        {showRaffleDropDown && <RaffleDropDown />}
        {showSupportDropDown && <SupportDropDown />}
      </div>
    </React.Fragment>
  );
}

export default Navbar;
