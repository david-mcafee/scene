import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import TracksReducer from './tracks_reducer';
import UsersReducer from './users_reducer';
import PlayerReducer from './player_reducer';
import CommentsReducer from './comments_reducer';

// NOTE: combineReducers accepts a single argument, an object whose
// properties will represent properties of our application state

// NOTE: it's easy to forget this, this is where we define all of the state
const RootReducer = combineReducers({
  session: SessionReducer,
  tracks: TracksReducer,
  player: PlayerReducer,
  users: UsersReducer,
  comments: CommentsReducer
});

export default RootReducer;
