import {
  RECEIVE_ALL_LISTS,
  DESTROY_LIST
} from '../actions/list_actions';
import merge from 'lodash/merge';

let defaultListsState = {lists: [], list: [], errors: []};

const ListsReducer = (state = defaultListsState, action) => {
  Object.freeze(state);
  let newState = merge({}, defaultListsState, state);

  switch (action.type) {
    case RECEIVE_ALL_LISTS:
      newState = action.lists;
      return newState;
    case DESTROY_LIST:
      newState[action.list.id] = undefined;
      return newState;
    default:
      return state;
  }
};

export default ListsReducer;
