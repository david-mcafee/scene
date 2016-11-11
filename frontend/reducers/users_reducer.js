import {
  RECEIVE_USERS,
  RECEIVE_USER
} from '../actions/user_actions';

import {
  RECEIVE_TRACK,
  REMOVE_TRACK
} from '../actions/track_actions';

import merge from 'lodash/merge';

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  // debugger;

  let newState;

  switch (action.type) {
    case RECEIVE_USERS:
      return merge({}, state, action.users);
    case RECEIVE_TRACK:

      newState = merge({}, state);
      // debugger;
      newState.selectedUserPageUser.tracks.push(action.track);
      return newState;

    case REMOVE_TRACK:
      debugger;
      newState = merge({}, state);

      let index = newState.selectedUserPageUser.tracks.indexOf(action.track);
      if (index > -1) {
        newState.selectedUserPageUser.tracks.splice(index, 1);
      }
      return newState;
    case RECEIVE_USER:
      // debugger;
      //NOTE: state not included here, to avoid appending
      return merge({}, {["selectedUserPageUser"]: action.user});
    default:
      return state;
  }
};

export default UsersReducer;
