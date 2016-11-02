// NOTE: this is a FUNCTIONAL component

import React from 'react';
import NavContainer from './nav/nav_container';

// NOTE: children is anything nested (in the routes)
// currently, login, signup, etc

const App = ({ children }) => (
  <div>
    <NavContainer />

    <div className="main-content">
      {children}
    </div>

    <footer className="player">
      <h4>player</h4>
      <h4>description</h4>
    </footer>
  </div>
);

export default App;
