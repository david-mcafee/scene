import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';

// NOTE: combineReducers accepts a single argument, an object whose
// properties will represent properties of our application state
const RootReducer = combineReducers({
  session: SessionReducer
});

export default RootReducer;
