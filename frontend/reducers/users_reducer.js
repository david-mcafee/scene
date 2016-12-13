import {
  RECEIVE_USERS,
  RECEIVE_USER,
  RESET_SELECTED_USER
} from '../actions/user_actions';

import {
  RECEIVE_TRACK,
  REMOVE_TRACK
} from '../actions/track_actions';

import merge from 'lodash/merge';

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState;

  switch (action.type) {
    case RECEIVE_USERS:
      return merge({}, state, action.users);
    case RECEIVE_TRACK:

      newState = merge({}, state);
      newState.selectedUserPageUser.tracks.push(action.track);
      return newState;

    case REMOVE_TRACK:
      newState = merge({}, state);

      let returnArray = [];
      newState.selectedUserPageUser.tracks.map( trackObject => {
        if (trackObject.id !== action.track.id) {
          returnArray.push(trackObject);
        }
      });

      newState.selectedUserPageUser.tracks = returnArray;
      return newState;
    case RECEIVE_USER:
      //NOTE: state not included here, to avoid appending
      return merge({}, {["selectedUserPageUser"]: action.user});

    case RESET_SELECTED_USER:
      return merge({}, {["selectedUserPageUser"]: {}});
    default:
      return state;
  }
};

export default UsersReducer;
