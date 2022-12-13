import React from "react";
import { BlogData } from "./BlogData";

function Blog() {
  return (
    <div className='grid grid-cols-4 gap-8 m-8 mt-[2rem] text-[#141204] sm-sc:grid-cols-2'>
      {BlogData.map((Blog) => {
        return (
          <div className=''>
            <div className='' key={Blog.id}>
              <img src={Blog.blogimg} alt='' />
              <div className=''>
                <h1 className='text-center p-4 text-[20px] sm-sc:text-[16px]'>{Blog.title}</h1>
                <p className='leading-6 font-normal text-[16px] sm-sc:text-[12px]'>
                  {Blog.body.slice(0, 161)}
                </p>
              </div>
              <div className='text-center'>
                <button className='bg-treColor1 mt-[1rem] pt-2 pb-2 pl-12 pr-12 text-[#ffffff] leading-6 text-[16px] sm-sc:text-[12px]'>
                  Read More
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Blog;
