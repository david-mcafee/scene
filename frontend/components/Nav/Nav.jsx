import React from 'react';
import { Link, withRouter } from 'react-router';

const sessionLinks = () => (
  <ul className="login-signup">
    <li><Link to="/login" className="nav-button" activeClassName="current">Log in</Link></li>
    <li><Link to="/signup" className="nav-button" activeClassName="current">Sign up</Link></li>
  </ul>
);

const personalGreeting = (currentUser, logout) => (
  <hgroup className="personal-greeting">
    <h6 className="header-name">{currentUser.username}</h6>
    <button onClick={logout}>Log Out</button>
  </hgroup>
);

const Nav = ({ currentUser, logout }) => {
  return(
    currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
  );
};

export default Nav;
