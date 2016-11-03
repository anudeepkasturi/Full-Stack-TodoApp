import {
  RECEIVE_ALL_LISTS,
  RECEIVE_LIST,
  RECEIVE_ERRORS
} from '../actions/list_actions';

let defaultState = {};

const ListReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_LISTS:

      break;
    default:
      return state;
  }

};


export default ListReducer;
