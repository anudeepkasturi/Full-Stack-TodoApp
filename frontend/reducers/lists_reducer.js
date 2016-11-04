import {
  RECEIVE_ALL_LISTS,
  UPDATE_LIST,
  CREATE_LIST,
  DESTROY_LIST,
  RECEIVE_LIST
} from '../actions/list_actions';
import merge from 'lodash/merge';

let defaultListsState = {};

const ListsReducer = (state = defaultListsState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_ALL_LISTS:
      newState = action.lists;
      return newState;
    case UPDATE_LIST:
    case CREATE_LIST:
    case RECEIVE_LIST:
      newState[action.list.id] = action.list;
      return newState;
    case DESTROY_LIST:
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default ListsReducer;
