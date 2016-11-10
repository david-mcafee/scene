import React from 'react';
import { Link, withRouter } from 'react-router';

const sessionLinks = () => (
  <ul className="login-signup">
    <li><Link to="/login" className="nav-button" activeClassName="current"><h5>Log in</h5></Link></li>
    <li><Link to="/signup" className="nav-button-solid" activeClassName="current"><h5>Sign up</h5></Link></li>
  </ul>
);

const personalGreeting = (currentUser, logout) => {
  let redirectUrl = `/users/${currentUser.id}`;

  return(

      <ul className="personal-greeting">
        <Link to={redirectUrl}>
          <li className="user-box">
            <p className="user-name">{currentUser.username}</p>
            <img src={currentUser.banner_url} className="user-avatar"></img>
          </li>
        </Link>
        <li><button onClick={logout} className="nav-button-solid"><h5>Log Out</h5></button></li>
      </ul>

  );
};

export const Nav = ({ currentUser, logout }) => (
    <div className="navigation">
      <ul>
        <li><Link to="/" className="nav-button-left"><img className="logo-image" src="http://res.cloudinary.com/localscene/image/upload/v1478807494/logo_unawft.png"></img><div className="logo">SCENE</div></Link></li>
        <li><Link to="/home" className="nav-button-left"><h5>artists</h5></Link></li>
        <li><Link to="/upload" className="nav-button-left"><h5>upload</h5></Link></li>
        <li>{currentUser ? personalGreeting(currentUser, logout) : sessionLinks()}</li>
      </ul>
    </div>
);
