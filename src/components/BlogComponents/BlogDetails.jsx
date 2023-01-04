import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

function BlogDetails({ bloId, Img, title, content }) {

  const navigate = useNavigate();
  let { postId } = useParams();
  postId = bloId;
  
  React.useEffect(() => {
    if (postId) return navigate(`/blog/${postId}`);
  });

  const blogPost = (
    <div className='pt-[8rem]'>
      <img src={Img} alt='' />
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );

  return (
    <div>
      <Navbar />
      {blogPost}
      <Footer />
    </div>
  );
}

export default BlogDetails;
