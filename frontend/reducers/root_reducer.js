import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ListsReducer from './lists_reducer';
import ListReducer from './list_reducer';
import TasksReducer from './tasks_reducer';
import TaskReducer from './task_reducer';
import ErrorsReducer from './errors_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  lists: ListsReducer,
  list: ListReducer,
  tasks: TasksReducer,
  task: TaskReducer,
  errors: ErrorsReducer
});

export default RootReducer;
