// NOTE: this, like App, is also a functional component

import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import TrackIndexContainer from './track_index/track_index_container';
import HomeContainer from './home/home_container';
import UserPageContainer from './user_page/user_page_container';
import { requestUser } from '../actions/user_actions';
import TrackFormContainer from './track_form/track_form_container';
import LandingPageContainer from './landing_page/landing_page';

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
      replace('/home');
    }
  };

  //

  const requestUserOnEnter = nextState => {
		store.dispatch(requestUser(nextState.params.user_id));
	};

  return(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={LandingPageContainer} onEnter={_redirectIfLoggedIn}/>
          <Route path="/home" component={HomeContainer} onEnter={_ensureLoggedIn}/>
          <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>
          <Route path="/upload" component={TrackFormContainer} onEnter={_ensureLoggedIn}/>
          <Route path="/tracks" component={TrackIndexContainer} onEnter={_ensureLoggedIn}/>
          <Route path="/tracks/:track_id/edit" component={TrackFormContainer} onEnter={_ensureLoggedIn}/>
          <Route path="/users/:user_id" component={UserPageContainer} onEnter={requestUserOnEnter}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
