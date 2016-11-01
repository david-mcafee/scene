import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';

// callback that will wait for DOM to be loaded
document.addEventListener('DOMContentLoaded', () => {
    // render app into the root container
    const root = document.getElementById('root');
    ReactDOM.render(<h1>app rendered</h1>, root);

    // for testing:
    window.store = configureStore();
    // test via store.getState() in console
});
