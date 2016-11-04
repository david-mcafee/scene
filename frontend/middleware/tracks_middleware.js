// NOTE: Remember, Middleware receives dispatches before the store. It can decide
// to intercept the dispatch, trigger another dispatch, or simply pass on
// it and do nothing.
// ALSO, not delete and remove - similar to post and receive
import {
  REQUEST_TRACKS,
  RECEIVE_TRACKS,
  POST_TRACK,
  DELETE_TRACK,
  removeTrack,
  receiveTracks,
  receiveTrack
} from '../actions/track_actions';

import {
  fetchTracks,
  postTrack,
  deleteTrack,
} from '../util/track_api_util';

// NOTE: Recall that Redux Middleware employs a currying strategy to
// link several Middleware to each other and ultimately to the store.
// You'll need to define 3 functions that wrap one-another

const TracksMiddleware = ({ getState, dispatch }) => next => action => {

  let success;
  let error = e => console.log(e.responseJSON);
  let receiveAllTracksSuccess = data => dispatch(receiveTracks(data));
  let receiveTrackSuccess = track => dispatch(receiveTrack(track));
  let removeTrackSuccess = track => dispatch(removeTrack(track));

  switch (action.type) {
    case REQUEST_TRACKS:
      // remember, this success callback is sent to the api_util, meaning that
      // if successfully retrieved, a new action creator will be dispatched,
      // (see track_actions), whose type will be RECEIVE_TRACKS, which will
      // then his the reducer
      fetchTracks(receiveAllTracksSuccess);
      return next(action);
    case POST_TRACK:
      postTrack(receiveTrackSuccess);
      return next(action);
    case DELETE_TRACK:
      deleteTrack(action.id, removeTrackSuccess);
    default:
      return next(action);
  }
};

export default TracksMiddleware;