import React from "react";
import Sidenav from "../components/RegUserDashboard/Sidenav";
// import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

function Dashboards() {
  return (
    <>
      <Navbar />
      <div>X</div>
      <div className='flex gap-1 bg-gray-400 pb-[3rem]'>
        <div className='w-[35.7%]'>
          <Sidenav className='' />
        </div>
        <div className=''>
          <Outlet />
        </div>
      </div>
      <div className='mt-[-4rem]'>
      <Footer />
      </div>
    </>
  );
}

export default Dashboards;
