import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as Utils from './util/session_api_util';
import * as Actions from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');

  let store;
  if (window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser}};
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  
  ReactDOM.render(<Root store={store} />, root);
  window.store = store;

  window.login = Actions.login;
  window.logout = Utils.logout;
  window.signup = Utils.signup;

  window.receiveCurrentUser = Actions.receiveCurrentUser;
});
