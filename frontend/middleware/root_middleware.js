import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import TracksMiddleware from './tracks_middleware';
import UsersMiddleware from './users_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  TracksMiddleware,
  UsersMiddleware
);

export default RootMiddleware;
