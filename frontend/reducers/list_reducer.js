import {
  RECEIVE_LIST,
  DESTROY_LIST,
  UNSELECT_LIST,
  CREATE_LIST
} from '../actions/list_actions';
import merge from 'lodash/merge';

let defaultListState = {};

const ListReducer = (state = defaultListState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_LIST:
      return action.list;
    case DESTROY_LIST:
    case UNSELECT_LIST:
      return defaultListState;
    default:
      return state;
  }
};

export default ListReducer;
