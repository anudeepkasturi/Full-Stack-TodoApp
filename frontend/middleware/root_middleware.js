import { applyMiddleware } from 'redux';

import SessionMiddleware from './session_middleware';
import ListMiddelware from './list_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  ListMiddelware
);

export default RootMiddleware;
