import { applyMiddleware } from 'redux';

import SessionMiddleware from './session_middleware';
import ListMiddelware from './list_middleware';
import TaskMiddleware from './task_middleware';
import SearchMiddleware from './search_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  ListMiddelware,
  TaskMiddleware,
  SearchMiddleware
);

export default RootMiddleware;
