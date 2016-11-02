import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// import all as namespace
// import * as Actions from "./actions/session_actions";

// callback that will wait for DOM to be loaded
document.addEventListener('DOMContentLoaded', () => {

    let store;
    // check to see if there is a currentUser stored on the window
    if (window.currentUser) {
      // if there is, create a preloadedstate (pass it to configure store)
      const preloadedState = {session: {currentUser: window.currentUser}};
      store = configureStore(preloadedState);
    } else {
      store = configureStore();
    }

    // render app into the root container
    const root = document.getElementById('root');

    // see root.jsx component
    ReactDOM.render(<Root store={store}/>, root);

    // window.store = store;
    // window.Actions = Actions;
});
