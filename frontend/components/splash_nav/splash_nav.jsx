import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <nav>
    <Link to="/login" activeClassName="current">Login</Link>
    <Link to="/signup" activeClassName="current">Sign Up</Link>
  </nav>
);

export const SplashNav = () => (
  <div className="splash-nav-container">
    <div className="splash-nav">
      <HomeLink />
      <div className="session-links">
        {sessionLinks()}
      </div>
    </div>
  </div>
);

export const HomeLink = () => (
  <div className="home-link">
    <Link to="/" activeClassName="current">Taskable</Link>
  </div>
);
