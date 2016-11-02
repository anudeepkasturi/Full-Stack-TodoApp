// actions
import {
  receiveCurrentUser,
  receiveErrors,
  LOGIN,
  LOGOUT,
  SIGNUP
  } from '../actions/session_actions';

// api utils
import { login, signup, logout } from '../util/session_api_util';

export default ({getState, dispatch}) => next => action => {
  const successCallback = user => {
    debugger;
    return dispatch(receiveCurrentUser(user));
  };
  const errorCallback = errors => dispatch(receiveErrors(errors.responseJSON));

  switch(action.type){
    case LOGIN:
      login(action.user, successCallback, errorCallback);
      return next(action);
    case LOGOUT:
      logout(() => next(action));
      break;
    case SIGNUP:
      signup(action.user, successCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
