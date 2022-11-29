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

function Routes() {
  return (
    <div>
      <Router>
        <RouterCover>
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<Homepage />} />
          <Route path='/sign-up' element={<SignupPage />} />
          <Route path='/sign-in' element={<SigninPage />} />
        </RouterCover>
      </Router>
    </div>
  );
}

export default Routes;
