import React from "react";
import {
  BrowserRouter as Router,
  Routes as RouterCover,
  Route,
} from "react-router-dom";
import SignupPage from "../pages/SignupPage";
import SigninPage from "../pages/SigninPage";
import Homepage from "../pages/Homepage";
import NotFound from "../pages/NotFound";
import AboutUsPage from "../pages/AboutUsPage";
import BlogPage from "../pages/BlogPage";
import ContactUs from "../pages/ContactUs";
import FAQ from "../pages/FAQ";
import PlayRafflePage from "../pages/PlayRafflePage";
import BlogDetails from "../components/BlogComponents/BlogDetails";
import CheckoutPage from "../pages/CheckoutPage";
import Dashboards from "../components/Dashboards";
import PersDetails from "../components/RegUserDashboard/PersDetails";
import Password from "../components/RegUserDashboard/Password";
import UserHistoryPage from "../pages/UserHistoryPage";
import ReferralPage from "../pages/ReferralPage";

function Routes() {
  if (!Route) return <div>loading...</div>;
  return (
    <div>
      <Router>
        <RouterCover>
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<Homepage />} />
          <Route path='/sign-up' element={<SignupPage />} />
          <Route path='/sign-in' element={<SigninPage />} />
          <Route path='/about-us' element={<AboutUsPage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/FAQ' element={<FAQ />} />
          <Route path='/play-ticket' element={<PlayRafflePage />} />
          <Route path='/blog/:postId' element={<BlogDetails />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/user-profile' element={<Dashboards />} >
            <Route path='/user-profile/' element={<PersDetails />} />
            <Route path='/user-profile/reset-password' element={<Password />} />
          </Route>
          <Route path='/history' element={<UserHistoryPage />} />
          <Route path='/referral' element={<ReferralPage />} />
        </RouterCover>
      </Router>
    </div>
  );
}

export default Routes;
