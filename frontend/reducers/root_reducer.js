import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ListsReducer from './lists_reducer';
import ErrorsReducer from './errors_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  lists: ListsReducer,
  errors: ErrorsReducer
});

export default RootReducer;
