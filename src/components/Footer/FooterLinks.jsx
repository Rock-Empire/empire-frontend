import React from "react";
import Logo from "../../assets/images/empire-logo.png";
import SocialLink from "./SocialLink";

function FooterLinks() {
  return (
    <React.Fragment>
    <div className=' bg-[#ffffff] text-[#595959]'>
      <div className='grid grid-cols-5 w-[1400px] m-auto items-start place-items-center leading-9 pt-[3rem] sm-sc:grid-cols-3 sm-sc:w-[350px] mini-sc:w-[700px] lg-sc:w-[1100px] xs:w-[300px]'>
        <div className='text-[12px] justify-items-start'>
          <ul>
            <a href='/'><li><img className='relative left-[-3rem] mb-[10px] w-[150px] h-[50px] ' src={Logo} alt='' /></li></a>
            <li>1, Owel Linkso, Orchid Road, Eleganza</li>
            <li>+2340813309324</li>
            <li>info@tre.ng</li>
          </ul>
        </div>
        <div>
          <h1 className='text-[14px]'>About Us</h1>
          <ul className='text-[12px] pt-[1rem] font-normal'>
            <a href='/'><li>Our Story</li></a>
            <a href='/'><li>Our Mission</li></a>
            <a href='/'><li>Our Vision</li></a>
            <a href='/'><li>Meet the team</li></a>
          </ul>
        </div>
        <div>
          <h1 className='text-[14px]'>Join Raffle</h1>
          <ul className='text-[12px] pt-[1rem] font-normal'>
            <a href='/'><li>Play Raffle</li></a>
            <a href='/'><li>Current Draws</li></a>
            <a href='/'><li>Ticket Type</li></a>
            <a href='/'><li>Past Winners</li></a>
          </ul>
        </div>
        <div>
          <h1 className='text-[14px]'>Support</h1>
          <ul className='text-[12px] pt-[1rem] font-normal'>
            <a href='/'><li>Contact Us</li></a>
            <a href='/'><li>FAQ</li></a>
          </ul>
        </div>
        <div>
          <h1 className='text-[14px]'>Follow Us</h1>
          <ul className='text-[12px] pt-[1rem] font-normal'>
            <a href='/'><li>Facebook</li></a>
            <a href='/'><li>Twitter</li></a>
            <a href='/'><li>Instagram</li></a>
            <a href='/'><li>Youtube</li></a>
            <a href='/'><li>LinkedIn</li></a>
          </ul>
        </div>
      </div>
      <SocialLink />
    </div>
    </React.Fragment>
  );
}

export default FooterLinks;
