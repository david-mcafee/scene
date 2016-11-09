import {
  PLAY_TRACK
} from '../actions/player_actions';

import merge from 'lodash/merge';

const PlayerReducer = (state = {}, action) => {
  Object.freeze(state);
  debugger;

  switch (action.type) {
    case PLAY_TRACK:
      return merge({}, state, {["current_track"]: action.track, ["playing"]: true});
    default:
      return state;
  }

};

export default PlayerReducer;
