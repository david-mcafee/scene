
// NOTE: IMPORTANT!!! this middleware will be responsible for invoking the appropriate
// SessionApiUtil function and passing the appropriate callbacks, which in turn
// will dispatch actions that will hit the reducer, which will ultimately
// change the state of our function

import { receiveCurrentUser,
         receiveErrors,
         LOGIN,
         LOGOUT,
         SIGNUP
       } from '../actions/session_actions';

import { login, signup, logout } from '../util/session_api_util';
import { hashHistory } from 'react-redux';

// NOTE: State has a dispatch function - we need to import this in order
// to be able to use it

export default ({ getState, dispatch }) => next => action => {
  const successCallback = user => dispatch(receiveCurrentUser(user));
  const errorCallback = xhr => dispatch(receiveErrors(xhr.responseJSON));
  const logoutCallback = () => dispatch(hashHistory.push("/"));

  switch(action.type) {
    case LOGIN:
      login(action.user, successCallback, errorCallback);
      return next(action);
    case LOGOUT:
      logout(logoutCallback);
      return next(action);
    case SIGNUP:
      signup(action.user, successCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
