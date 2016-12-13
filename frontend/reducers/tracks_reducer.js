import {
  RECEIVE_TRACKS,
  RECEIVE_TRACK,
  REMOVE_TRACK,
  UPDATE_TRACK } from '../actions/track_actions';

import merge from 'lodash/merge';

// NOTE: see Root reducer to see how this reducer defines it's own slice
// of this state... i.e. this ONLY refers to "tracks". state could be
// set equal to an empty array, etc, whatever....

const TracksReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_TRACKS:

      return merge({}, action.tracks);
    default:
      return state;
  }
};

export default TracksReducer;
