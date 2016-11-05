import { RECEIVE_CURRENT_USER, LOGOUT, RECEIVE_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';
import { hashHistory } from 'react-router';

// session reducer maintains it's own default state.

const _nullUser = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = _nullUser, action) => {
  // use freeze and merge to prevent the state from being accidentally mutated!
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      // NOTE: UPDATE THE STATE: set current user to action's user, and clear errors
      const currentUser = action.currentUser;
      return merge({}, _nullUser, { currentUser });
    case RECEIVE_ERRORS:
      // NOTE: UPDATE THE STATE: set current user to null, and clear errors
      const errors = action.errors;
      return merge({}, _nullUser, { errors });
    case LOGOUT:
      return merge({}, _nullUser);
    default:
      return state;
  }
};

export default SessionReducer;
