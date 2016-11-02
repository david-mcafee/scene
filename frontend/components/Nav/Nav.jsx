import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <ul className="login-signup">
    <li><Link to="/login" activeClassName="current">Log in!!!</Link></li>
    <li><Link to="/signup" activeClassName="current">Sign up!!!</Link></li>
  </ul>
);

const personalGreeting = (currentUser, logout) => (
  <hgroup className="personal-greeting">
    <h6 className="header-name">{currentUser.username}</h6>
    <button className="header-button" onClick={logout}>Log Out</button>
  </hgroup>
);

const Nav = ({ currentUser, logout }) => {
  return(
    <div className="navigation">
      <ul>
        <li><Link to="/">scene</Link></li>
        <li><Link to="/">home</Link></li>
        <li><Link to="/upload">upload</Link></li>
        <li>{currentUser ? personalGreeting(currentUser, logout) : sessionLinks()}</li>
      </ul>
    </div>
  );
};

export default Nav;
