import { applyMiddleware } from 'redux';

import SessionMiddleware from './session_middleware';
import ListMiddelware from './list_middleware';
import TaskMiddleware from './task_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  ListMiddelware,
  TaskMiddleware
);

export default RootMiddleware;
