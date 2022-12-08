import React from 'react';
import { Link } from 'react-router-dom'

const NotFound = ()=> {
  return (
    <div>
      <h1>The URL entered can not be found</h1>
      <Link to='/'>Please go back to homepage</Link>
    </div>
  )
}

export default NotFound