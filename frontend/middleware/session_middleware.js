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

let defaultState = {};

const SessionMiddleware = ({dispatch}) => next => action => {
  const loginSuccess = user => dispatch(receiveCurrentUser(user));
  const errorCB = errors => dispatch(receiveErrors(errors.responseJSON));

  switch (action.type) {
    case LOGIN:
      login(action.user, loginSuccess, errorCB);
      return next(action);
    case SIGNUP:
      signup(action.user, loginSuccess, errorCB);
      return next(action);
    case LOGOUT:
      logout(() => next(action), errorCB);
      break;
    default:
      return next(action);
  }
};

export default SessionMiddleware;
