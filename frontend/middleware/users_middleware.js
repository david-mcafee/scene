import {
  REQUEST_USERS,
  REQUEST_USER,
  receiveUsers,
  receiveUser
} from '../actions/user_actions';

import {
  fetchUsers,
  fetchUser
} from '../util/user_api_util';

import { hashHistory } from 'react-router';

const UsersMiddleware = ({ getState, dispatch }) => next => action => {
  let error = e => console.log(e.responseJSON);
  let receiveAllUsersSuccess = data => dispatch(receiveUsers(data));
  let receiveUserSuccess = data => dispatch(receiveUser(data));

  switch (action.type) {
    case REQUEST_USERS:
      fetchUsers(receiveUserSuccess);
      return next(action);
    case REQUEST_USER:
      fetchUser(receiveUserSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default UsersMiddleware;
