// NOTE: Remember, Middleware receives dispatches before the store. It can decide
// to intercept the dispatch, trigger another dispatch, or simply pass on
// it and do nothing.
// ALSO, not delete and remove - similar to post and receive
import {
  REQUEST_COMMENTS,
  RECEIVE_COMMENTS,
  POST_COMMENT,
  DELETE_COMMENT,
  UPDATE_COMMENT,
  removeComment,
  receiveComments,
  receiveComment
} from '../actions/comments_actions';

import {
  fetchComments,
  postComment,
  deleteComment,
  updateComment,
} from '../util/comments_api_util';

import { hashHistory } from 'react-router';

// NOTE: Recall that Redux Middleware employs a currying strategy to
// link several Middleware to each other and ultimately to the store.
// You'll need to define 3 functions that wrap one-another

const CommentsMiddleware = ({ getState, dispatch }) => next => action => {

  let success;
  let error = e => console.log(e.responseJSON);
  let receiveAllCommentsSuccess = data => dispatch(receiveComments(data));
  let receiveCommentSuccess = comment => dispatch(receiveComment(comment));
  let removeCommentSuccess = comment => dispatch(removeComment(comment));
  let updateCommentSuccess = comment => {
    dispatch(receiveComment(comment));
  };

  switch (action.type) {
    case REQUEST_COMMENTS:
      // remember, this success callback is sent to the api_util, meaning that
      // if successfully retrieved, a new action creator will be dispatched,
      // (see track_actions), whose type will be RECEIVE_TRACKS, which will
      // then his the reducer
      // debugger;
      fetchComments(action.id, receiveAllCommentsSuccess);
      return next(action);
    case POST_COMMENT:
      postComment(receiveCommentSuccess, action.url);
      return next(action);
    case DELETE_COMMENT:
      deleteComment(action.id, removeCommentSuccess);
    default:
      return next(action);
  }
};

export default CommentsMiddleware;
