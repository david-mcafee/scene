import {
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT,
  UPDATE_COMMENT } from '../actions/comments_actions';

import merge from 'lodash/merge';

// NOTE: see Root reducer to see how this reducer defines it's own slice
// of this state... i.e. this ONLY refers to "tracks". state could be
// set equal to an empty array, etc, whatever....

const CommentsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_COMMENTS:
      // debugger;
      return merge({}, action.track.comments);
    case RECEIVE_COMMENT:
      return merge({}, state, {[action.comment.id]: action.comment});
    case REMOVE_COMMENT:
      let newState = merge({}, state);
      delete newState[action.comment.id]; // NOTE: REVIEW DELETE
      return newState;
    // case UPDATE_TRACK:
    //   retu
    default:
      return state;
  }
};

export default CommentsReducer;
