import {
  REQUEST_USERS,
  receiveUsers
} from '../actions/user_actions';

import {
  fetchUsers
} from '../util/user_api_util';

import { hashHistory } from 'react-router';

const UsersMiddleware = ({ getState, dispatch }) => next => action => {
  let error = e => console.log(e.responseJSON);
  let receiveAllUsersSuccess = data => dispatch(receiveUsers(data));

  switch (action.type) {
    case REQUEST_USERS:
      fetchUsers(receiveAllUsersSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default UsersMiddleware;
