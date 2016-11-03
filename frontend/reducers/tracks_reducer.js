import merge from 'lodash/merge';
import { RECEIVE_TRACKS } from '../actions/track_actions';

// NOTE: see Root reducer to see how this reducer defines it's own slice
// of this state... i.e. this ONLY refers to "tracks". state could be
// set equal to an empty array, etc, whatever....

const TracksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRACKS:
      return action.tracks;
    default:
      return state;
  }
};

export default TracksReducer;
