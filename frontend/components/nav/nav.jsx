import React from 'react';
import { Link, withRouter } from 'react-router';

const sessionLinks = () => (
  <ul className="login-signup">
    <li><Link to="/login" className="nav-button" activeClassName="current"><h5>Log in</h5></Link></li>
    <li><Link to="/signup" className="nav-button-solid" activeClassName="current"><h5>Sign up</h5></Link></li>
  </ul>
);

const personalGreeting = (currentUser, logout) => (
  <ul className="personal-greeting">
    <li className="user-box">
      <p className="user-name">{currentUser.username}</p>
      <img src="https://s-media-cache-ak0.pinimg.com/236x/a7/7e/3d/a77e3d34eb1a05f7bc930d3f719c0846.jpg" className="user-avatar"></img>
    </li>
    <li><button onClick={logout} className="nav-button-solid"><h5>Log Out</h5></button></li>
  </ul>
);

export const Nav = ({ currentUser, logout }) => (
    <div className="navigation">
      <ul>
        <li><Link to="/" className="nav-button-left"><h5>logo</h5></Link></li>
        <li><Link to="/" className="nav-button-left"><h5>home</h5></Link></li>
        <li><Link to="/upload" className="nav-button-left"><h5>upload</h5></Link></li>
        <li>{currentUser ? personalGreeting(currentUser, logout) : sessionLinks()}</li>
      </ul>
    </div>
);
