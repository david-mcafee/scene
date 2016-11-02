import React from 'react';
import { Link } from 'react-router';

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
    <div className="navigation">
      <ul>
        <li><Link to="/" className="nav-button">scene</Link></li>
        <li><Link to="/" className="nav-button">home</Link></li>
        <li><Link to="/upload" className="nav-button">upload</Link></li>
        <li>{currentUser ? personalGreeting(currentUser, logout) : sessionLinks()}</li>
      </ul>
    </div>
  );
};

export default Nav;
