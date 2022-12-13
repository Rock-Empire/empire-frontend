import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import BlogHero from '../components/BlogComponents/BlogHero';
import BlogComponents from '../components/BlogComponents/Blog';

function BlogPage() {
  return (
    <React.Fragment>
      <div>
        <Navbar />
        <BlogHero />
        <BlogComponents />
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default BlogPage;