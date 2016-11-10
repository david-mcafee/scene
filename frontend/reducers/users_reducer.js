import {
  RECEIVE_USERS,
  RECEIVE_USER
} from '../actions/user_actions';

import {
  RECEIVE_TRACK
} from '../actions/track_actions';

import merge from 'lodash/merge';

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  // debugger;

  switch (action.type) {
    case RECEIVE_USERS:
      return merge({}, state, action.users);
    case RECEIVE_TRACK:

      let newState = merge({}, state);
      debugger;
      newState.selectedUserPageUser.tracks.push(action.track);
      return newState;
      // return merge({}, state)
    case RECEIVE_USER:
      // debugger;
      //NOTE: state not included here, to avoid appending
      return merge({}, {["selectedUserPageUser"]: action.user});
    default:
      return state;
  }
};

export default UsersReducer;
