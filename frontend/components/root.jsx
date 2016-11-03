import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session/session_form_container';
import SplashNav from './splash_nav/splash_nav';
import { clearErrors } from '../actions/session_actions';



const Root = ({ store }) => {

  const handleRedirect = (nextState, replace) => {
    store.dispatch(clearErrors());
    _redirectIfLoggedIn(nextState, replace);
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };


  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SplashNav}/>
          <Route
            path="/login"
            component={ SessionFormContainer }
            onEnter={ handleRedirect }
          />
          <Route
            path="/signup"
            component={ SessionFormContainer }
            onEnter={ handleRedirect }
          />
        </Route>
      </Router>
    </Provider>
  );

};

export default Root;
