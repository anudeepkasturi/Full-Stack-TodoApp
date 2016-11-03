import {
  RECEIVE_CURRENT_USER,
  LOGOUT,
  LOGIN,
  RECEIVE_ERRORS,
  CLEAR_ERRORS
 } from '../actions/session_actions';
import merge from 'lodash/merge';

const defaultState = {currentUser: null, errors: []};

const SessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, defaultState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState.currentUser = action.currentUser;
      newState.errors = [];
      return newState;
    case RECEIVE_ERRORS:
      newState.errors = action.errors;
      return newState;
    case LOGOUT:
      return defaultState;
    case CLEAR_ERRORS:
      newState.errors = [];
      return newState;
    default:
      return state;
  }
};


export default SessionReducer;
