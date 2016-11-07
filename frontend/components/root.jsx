// NOTE: this, like App, is also a functional component

import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import TrackIndexContainer from './track_index/track_index_container';
import HomeContainer from './home/home_container';

const Root = ({ store }) => {

  // NOTE: helper methods for onEnter prop. the callback will run synchronously.
  // NOTE: review here: https://github.com/appacademy/curriculum/blob/master/react/readings/on_enter.md

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  return(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={HomeContainer}/>
          <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>
          <Route path="/upload" component={TrackIndexContainer} onEnter={_ensureLoggedIn}/>
          <Route path="/tracks" component={TrackIndexContainer} onEnter={_ensureLoggedIn}/>
          <Route path="/tracks/:track_id/edit" component={TrackIndexContainer} onEnter={_ensureLoggedIn}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
