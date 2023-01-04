import React from 'react';
import SupportBgImg from '../../assets/images/aboutbgimage.png'

function SupportHero() {
  return (
    <div className='h-[70vh] bg-no-repeat font-normal bg-cover text-center text-[#ffffff] flex justify-center items-center text-[48px] sm-sc:text-[32px]' style={{
      backgroundImage: `url(${SupportBgImg})`
    }}>
      <div>
        <h1>We can’t wait to talk to you.</h1>
      </div>
    </div>
  )
}

export default SupportHero;