// NOTE: Remember, Middleware receives dispatches before the store. It can decide
// to intercept the dispatch, trigger another dispatch, or simply pass on
// it and do nothing.

import { fetchBenches } from '../util/track_api_util';
import { REQUEST_TRACKS, RECEIVE_TRACKS, receiveTracks } from '../actions/track_actions';

// NOTE: Recall that Redux Middleware employs a currying strategy to
// link several Middleware to each other and ultimately to the store.
// You'll need to define 3 functions that wrap one-another

const TracksMiddleware = ({ getState, dispatch }) => next => action => {
  switch (action.type) {
    case REQUEST_TRACKS:
      // remember, this success callback is sent to the api_util, meaning that
      // if successfully retrieved, a new action creator will be dispatched,
      // (see track_actions), whose type will be RECEIVE_TRACKS, which will
      // then his the reducer
      const success = data => dispatch(receiveTracks(data));
      fetchBenches(success);
      return next(action);
    default:
      return next(action);
  }
};

export default TracksMiddleware;
