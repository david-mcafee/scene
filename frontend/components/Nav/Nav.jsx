import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <hgroup className="login-signup">
    <Link to="/login" activeClassName="current">Log in!!!</Link>
    <br/>
    <Link to="/signup" activeClassName="current">Sign up!!!</Link>
  </hgroup>
);

const personalGreeting = (currentUser, logout) => (
  <hgroup className="header-group">
    <h6 className="header-name">{currentUser.username}</h6>
    <button className="header-button" onClick={logout}>Log Out</button>
  </hgroup>
);

const Nav = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Nav;
