import React from 'react'
import ContactForm from './ContactForm';
import Support from './Support';

function SupportMap() {
  return (
    <div className='flex w-[1400px] m-auto gap-[8rem] font-normal items-center mt-[3rem] h-[80vh] sm-sc:w-[350px] sm-sc:flex-col sm-sc:h-[400px] sm-sc:gap-[0rem] mini-sc:w-[800px] mini-sc:gap-[2rem] mini-sc:h-[800px]'>
      <Support />
      <ContactForm />
    </div>
  )
}

export default SupportMap;