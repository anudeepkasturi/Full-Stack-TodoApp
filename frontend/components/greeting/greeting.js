import React from 'react';
import { Link } from 'react-router';

const personalGreeting = (currentUser, logout) => (
  <hgroup className="header-group">
    <h2>Hello, {currentUser.username}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
  </hgroup>
);

const Greeting = ({ currentUser, logout }) => {
  return (
    currentUser ? personalGreeting(currentUser, logout) : <div></div>
  );
};

export default Greeting;
