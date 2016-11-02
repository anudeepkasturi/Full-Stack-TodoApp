import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <nav>
    <Link to="/login" activeClassName="current">Login</Link>
    <Link to="/signup" activeClassName="current">Sign Up</Link>
  </nav>
);

const SplashNav = () => {
    return (
      <div className="splash-nav">
        {sessionLinks()}
      </div>
    );
};


export default SplashNav;
