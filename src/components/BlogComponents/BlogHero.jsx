import React from 'react';
import Bg from '../../assets/images/blogimgbg.png'

function BlogHero() {
  return (
    <div className='bg-no-repeat font-normal flex bg-cover text-center text-[#ffffff] items-center'
      style={{
        backgroundImage: `url(${Bg})`,
        height: '60vh',
      }}
    >
      <div className='w-[700px] m-auto flex flex-col sm-sc:w-[300px]'>
        <h1 className='text-[48px] sm-sc:text-[34px]'>You'll learn everything from us.</h1>
        <p className='text-[18px] font-normal leading-7 sm-sc:text-[14px]'>Connecting ideas and people – how talk can change our lives</p>
      </div>
    </div>
  )
}

export default BlogHero;