import React from 'react';
import ReactDOM from 'react-dom';

// callback that will wait for DOM to be loaded
document.addEventListener('DOMContentLoaded', () => {
    // render app into the root container
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome to Scene!</h1>, root);
});
