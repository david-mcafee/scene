import {
  RECEIVE_USERS,
  RECEIVE_USER
} from '../actions/user_actions';

import merge from 'lodash/merge';

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_USERS:
      return merge({}, state, action.users);
    case RECEIVE_USER:
      debugger;
      return merge({}, state, {["selectedUserPageUser"]: action.user});
    default:
      return state;
  }
};

export default UsersReducer;
