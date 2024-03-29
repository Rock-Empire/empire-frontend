import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GrFormDown, GrFormUp } from "react-icons/gr";
import { ImMenu } from "react-icons/im";
import Logo from "../../assets/images/empire-logo.png";
import RaffleDropDown from "./RaffleDropDown";
import SupportDropDown from "./SupportDropDown";
import Button from "../Button";
import UserDropDown from "../RegUserDashboard/UserDropDown";

function Navbar() {
  const [showRaffleDropDown, setShowRaffleDropDown] = useState(false);
  const [showSupportDropDown, setShowSupportDropDown] = useState(false);
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  const [showUserDropDown, setShowUserDropDown] = useState(false);

  const auth = useSelector((state) => state.auth);
  const user = JSON.parse(auth.user);

  const handleRaffleDropDown = () => {
    setShowRaffleDropDown(!showRaffleDropDown);
    setShowSupportDropDown(false);
  };

  const handleSupportDropDown = () => {
    setShowSupportDropDown(!showSupportDropDown);
    setShowRaffleDropDown(false);
  };

  const handleUserDropDown = () => {
    setShowUserDropDown(!showUserDropDown);
  };

  const handleHamburgerMenu = () => setShowHamburgerMenu(!showHamburgerMenu);
  const handleHamburgerMenuCancel = () =>
    setShowHamburgerMenu(!showHamburgerMenu);

  return (
    <React.Fragment>
      <div className='fixed z-50 left-0 right-0 sm-sc:bg-[#ffffff] sm-sc:z-50 text-[#141204] sm-sc:absolute sm-sc:right-0 sm-sc:left-0 mini-sc:absolute mini-sc:right-0 mini-sc:left-0 mini-sc:z-50 xs:w-full'>
        <div className=''>
          <div className='hidden sm-sc:flex sm-sc:relative sm-sc:justify-between sm-sc:align-center'>
            <div className=''>
              {!showHamburgerMenu ? (
                <ImMenu
                  onClick={handleHamburgerMenu}
                  className='w-[50px] h-[50px] text-[#ED3833] true'
                />
              ) : (
                <div
                  className='text-[24px] p-2 text-[#ED3833] true'
                  onClick={handleHamburgerMenuCancel}
                >
                  X
                </div>
              )}
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
                ? "h-[100%] flex flex-col h-[400px] justify-around font-normal items-center text-[14px] bg-[#FFFFFF] p-1"
                : "flex justify-around font-normal items-center text-[14px] bg-[#FFFFFF] p-1 sm-sc:hidden"
            }
          >
            <Link to='/'>
              <div>
                <img className='sm-sc:hidden' src={Logo} alt='Company logo' />
              </div>
            </Link>
            <nav className=' sm-sc:mt-[rem]'>
              <ul className='flex gap-[3rem] sm-sc:block sm-sc:w-[100%] sm-sc:gap-y-[1rem] sm-sc:font-normal sm-sc:mb-[1rem] sm-sc:ml-[5px] mini-sc:gap-[1rem] '>
                <Link to='/about-us' className='group/item'>
                  <li>About Us</li>
                  <div
                    className='group/edit invisible group-hover/item:visible sm-sc:hidden'
                    style={{
                      borderTop: "3px solid #ED3833",
                      width: "100%",
                      "@apply": "-underlin-from-right",
                    }}
                  ></div>
                </Link>
                <div
                  onClick={handleRaffleDropDown}
                  className='group/item flex gap-[1rem] items-center cursor-pointer sm-sc:mt-[1rem] mini-sc:gap-[1rem]'
                >
                  <div className='flex flex-col items-center justify-center'>
                    <li>Join Raffle</li>
                    <div
                      className='group/edit invisible ml-[1.5rem] group-hover/item:visible sm-sc:hidden'
                      style={{ borderTop: "3px solid #ED3833", width: "180%" }}
                    ></div>
                  </div>
                  <span>
                    {!showRaffleDropDown ? <GrFormDown /> : <GrFormUp />}
                  </span>
                </div>
                <div
                  onClick={handleSupportDropDown}
                  className='group/item flex gap-[1rem] items-center justify-center cursor-pointer sm-sc:mt-[1rem] sm-sc:mr-[20.3rem]'
                >
                  <div className='flex flex-col items-center justify-center'>
                    <li className=''>Support</li>
                    <div
                      className='group/edit invisible ml-[1.5rem] group-hover/item:visible sm-sc:hidden'
                      style={{ borderTop: "3px solid #ED3833", width: "180%" }}
                    ></div>
                  </div>
                  <span>
                    {!showSupportDropDown ? <GrFormDown /> : <GrFormUp />}
                  </span>
                </div>
                <Link to='/blog' className='group/item'>
                  <li className='sm-sc:mt-[1rem] group/item'>Blog</li>
                  <div
                    className='group/edit invisible group-hover/item:visible sm-sc:hidden'
                    style={{ borderTop: "3px solid #ED3833", width: "100%" }}
                  ></div>
                </Link>
              </ul>
            </nav>
            {auth.auth === false ? (
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
            ) : (
              <div
                className='flex items-center gap-4 cursor-pointer'
                onClick={handleUserDropDown}
              >
                <p>...</p>
                {user.firstName + " " + user.lastName}
              </div>
            )}
          </div>
          <hr className='w-[100%] sm-sc:hidden' />
        </div>
        {showRaffleDropDown && <RaffleDropDown />}
        {showSupportDropDown && <SupportDropDown />}
        {showUserDropDown && <UserDropDown />}
      </div>
    </React.Fragment>
  );
}

export default Navbar;
