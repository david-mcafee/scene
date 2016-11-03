import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import UploadButton from './components/file_upload/upload_button';
// import ImageList from './components/file_upload/ImageList';


document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
      const preloadedState = {session: {currentUser: window.currentUser}};
      store = configureStore(preloadedState);
    } else {
      store = configureStore();
    }

    const root = document.getElementById('root');

    ReactDOM.render(<Root store={store}/>, root);
});
