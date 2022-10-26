import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

function Navbar() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  
  if (Auth.loggedIn()) {
    return (
      <>
        <Link to="/me">
          {Auth.getProfile().data.username}'s profile
        </Link>
        <button onClick={logout}>
          Logout
        </button>
        <Link to="/apply">
        Apply
      </Link>
      </>
    );
  }
  // If logged out show login controls
  return (
    <>
      <Link to="/login">
        Login
      </Link>
      <Link to="/signup">
        Signup
      </Link>
      <Link to="/apply">
        Apply
      </Link>
    </>
  ) 
}

export default Navbar
