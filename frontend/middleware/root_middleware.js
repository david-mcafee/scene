import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import TracksMiddleware from './tracks_middleware';
import UsersMiddleware from './users_middleware';
import CommentsMiddleware from './comments_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  TracksMiddleware,
  UsersMiddleware,
  CommentsMiddleware
);

export default RootMiddleware;
