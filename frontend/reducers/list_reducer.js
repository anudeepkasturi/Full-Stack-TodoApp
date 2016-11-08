import {
  RECEIVE_LIST,
  DESTROY_LIST,
  SELECT_LIST,
  CREATE_LIST
} from '../actions/list_actions';
import merge from 'lodash/merge';

let defaultListState = {};

const ListReducer = (state = defaultListState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_LIST:
      return action.list.id;
    case SELECT_LIST:
      return action.id;
    case DESTROY_LIST:
      return defaultListState;
    default:
      return state;
  }
};

export default ListReducer;
