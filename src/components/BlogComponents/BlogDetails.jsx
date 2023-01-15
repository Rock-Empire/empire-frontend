import React from "react";
import { useParams } from "react-router-dom";
import { BlogData } from "./BlogData";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

function BlogDetails() {
  let { postId } = useParams();

  const BlogPost = BlogData.find((blog) => blog.id === Number(postId));

  return (
    <div>
      <Navbar />
      <div className='pt-[5rem] sm-sc:pt-[3rem] '>
        <div>
          <img className='w-full h-[600px]' src={BlogPost.blogimg} alt='' />
        </div>
        <div className='w-[1400px] m-auto sm-sc:w-[350px] mini-sc:w-[720px] lg-sc:w-[1100px] xs:w-[300px]'>
          <div className='pt-4 pb-4 text-center'>
          <h1 className='text-[48px] font-bold sm-sc:text-[34px] mini-sc:text-[38px]'>{BlogPost.title}</h1>
          </div>
          <p className='text-[16px] font-normal leading-10 sm-sc:text-[14px] mini-sc:text-[15px]'>{BlogPost.body}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BlogDetails;
