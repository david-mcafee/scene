import merge from 'lodash/merge';
import { RECEIVE_TRACKS } from '../actions/bench_actions';

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
