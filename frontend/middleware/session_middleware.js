// actions
import {
  receiveCurrentUser,
  receiveErrors,
  LOGIN,
  LOGOUT,
  SIGNUP,
  GUEST_LOGIN
  } from '../actions/session_actions';

// api utils
import { login, signup, logout } from '../util/session_api_util';

let defaultState = {};
let guest = {user:{username: "Guest", password: "123123"}};

const SessionMiddleware = ({ dispatch }) => next => action => {
  const loginSuccess = user => dispatch(receiveCurrentUser(user));
  const errorCB = errors => dispatch(receiveErrors(errors.responseJSON));

  switch (action.type) {
    case LOGIN:
      login(action.user, loginSuccess, errorCB);
      return next(action);
    case SIGNUP:
      signup(action.user, loginSuccess, errorCB);
      return next(action);
    case GUEST_LOGIN:
      login(guest, loginSuccess, errorCB);
      return next(action);
    case LOGOUT:
      logout(() => next(action), errorCB);
      break;
    default:
      return next(action);
  }
};

export default SessionMiddleware;
