import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// NOTE: for testing:
// import all as namespace
import * as Actions from "./actions/session_actions";

// callback that will wait for DOM to be loaded
document.addEventListener('DOMContentLoaded', () => {

    const store = configureStore();

    // render app into the root container
    const root = document.getElementById('root');

    // see root.jsx component
    ReactDOM.render(<Root store={store}/>, root);

    // NOTE: for testing:
    window.store = store;
    window.Actions = Actions;
});
