import {
  RECEIVE_TRACKS,
  RECEIVE_TRACK,
  REMOVE_TRACK,
  UPDATE_TRACK,
  PLAY_TRACK } from '../actions/track_actions';

import merge from 'lodash/merge';

// NOTE: see Root reducer to see how this reducer defines it's own slice
// of this state... i.e. this ONLY refers to "tracks". state could be
// set equal to an empty array, etc, whatever....

const TracksReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_TRACKS:
      return merge({}, action.tracks);
    case RECEIVE_TRACK:
      return merge({}, state, {[action.track.id]: action.track});
    case REMOVE_TRACK:
      let newState = merge({}, state);
      delete newState[action.track.id]; // NOTE: REVIEW DELETE
      return newState;
    // case UPDATE_TRACK:
    //   retu
    case PLAY_TRACK:
      return merge({}, state, {["current_track"]: action.track, ["playing"]: true});
    default:
      return state;
  }
};

export default TracksReducer;
