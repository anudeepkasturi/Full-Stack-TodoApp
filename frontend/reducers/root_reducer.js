import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ListReducer from './list_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  list: ListReducer
});

export default RootReducer;
