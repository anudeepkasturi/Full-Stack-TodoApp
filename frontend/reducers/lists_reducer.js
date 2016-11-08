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
      return action.lists;
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
