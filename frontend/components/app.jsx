// NOTE: this is a FUNCTIONAL component

import React from 'react';
import NavContainer from './nav/nav_container';

// NOTE: children is anything nested (in the routes)
// currently, login, signup, etc

const App = ({ children }) => (
  <div>
    <h1>app rendered</h1>
    <NavContainer />
    {children}
  </div>
);

export default App;
