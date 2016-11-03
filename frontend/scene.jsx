import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import UploadButton from './components/track_upload/upload_button';
// import ImageList from './components/file_upload/ImageList';



import { requestTracks } from './actions/track_actions';

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

    window.store = store;
    // window.requestTracks = requestTracks;
    // store.dispatch(requestTracks());


    // test tracks:
    window.success = () => console.log("success");
    window.fetchTracks = (success) => {
      $.ajax({
        method: "GET",
        url: "/api/tracks",
        success,
        error: () => console.log('error from fetchTracks')
      });
    };
});
