export const REQUEST_USERS = "REQUEST_USERS";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const REQUEST_USER = "REQUEST_USER";
export const RECEIVE_USER = "RECEIVE_USER";

export const requestUsers = () => ({
  type: REQUEST_USERS
});

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

export const requestUser = (id) => ({
  type: REQUEST_USER,
  id
});

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});
