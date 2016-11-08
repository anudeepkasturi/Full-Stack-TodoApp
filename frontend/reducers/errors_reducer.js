import {
  RECEIVE_ERRORS,
  CLEAR_ERRORS
} from '../actions/error_actions';

import merge from 'lodash/merge';

let defaultErrorsState = {
  session: [],
  list: [],
  task: [],
  search: []
};

const ErrorsReducer = (state = defaultErrorsState, action) => {
  Object.freeze(state);
  
  let newState = merge({}, state);
  newState[action.typeErrors] = [];

  switch (action.type) {
    case RECEIVE_ERRORS:
      newState[action.typeErrors] = action.errors;
      return newState;
    case CLEAR_ERRORS:
      return newState;
    default:
      return state;
  }
};

export default ErrorsReducer;
