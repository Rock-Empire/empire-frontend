import React from 'react';
import SupportBgImg from '../../assets/images/aboutbgimage.png'

function FAQHero() {
  return (
    <div className='h-[70vh] bg-no-repeat font-normal bg-cover text-center text-[#ffffff] flex justify-center items-center text-[48px] sm-sc:text-[32px]' style={{
      backgroundImage: `url(${SupportBgImg})`
    }}>
      <div>
        <h1>Got Questions?</h1>
        <p className='text-[18px]'>We got answers. Read through.</p>
      </div>
    </div>
  )
}

export default FAQHero;