import React from "react";
import {
  BrowserRouter as Router,
  Routes as RouterCover,
  Route,
} from "react-router-dom";
import SignupPage from "../pages/SignupPage";
import SigninPage from '../pages/SigninPage';
import Homepage from '../pages/Homepage';
import NotFound from '../pages/NotFound';
import AboutUsPage from '../pages/AboutUsPage';
import Blog from '../pages/Blog';
import ContactUs from '../pages/ContactUs';
import FAQ from '../pages/FAQ';
import PlayRaffle from '../pages/PlayRaffle';
// import PastWinners from '../components/LandingPageComponents/Android/PastWinners/PastWinners';


function Routes() {
  if(!Route) return <div>loading...</div>
  return (
    <div>
      <Router>
        <RouterCover>
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<Homepage />} />
          <Route path='/sign-up' element={<SignupPage />} />
          <Route path='/sign-in' element={<SigninPage />} />
          <Route path='/about-us' element={<AboutUsPage />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/FAQ' element={<FAQ />} />
          <Route path='/play-ticket' element={<PlayRaffle />} />
          <Route path='/support' element={<PlayRaffle />} />
          {/* <Route exact path='/past-winners' element={<PastWinners />} /> */}
        </RouterCover>
      </Router>
    </div>
  );
}

export default Routes;
