import React from 'react'
import {
  BrowserRouter as Router,
  Routes as RouterCover,
  Route,
} from 'react-router-dom'
import SignupPage from '../pages/SignupPage'

function Routes() {
  return (
    <div>
      <Router>
        <RouterCover>
          <Route path="/sign-up" element={<SignupPage />} />
        </RouterCover>
      </Router>
    </div>
  )
}

export default Routes;