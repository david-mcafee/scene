// NOTE: this is a FUNCTIONAL component

import React from 'react';
import NavContainer from './nav/nav_container';
import PlayerContainer from './player/player_container';

// NOTE: children is anything nested (in the routes)
// currently, login, signup, etc

const App = ({ children }) => (
  <div className="all-content">
    <NavContainer />

    <div className="main-content">
      {children}
    </div>

    <PlayerContainer />
  </div>
);

export default App;
