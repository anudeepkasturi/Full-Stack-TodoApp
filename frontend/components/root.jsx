import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { clearErrors } from '../actions/error_actions';
import App from './app';
import SessionFormContainer from './session/session_form_container';
import {HomeLink, SplashNav} from './splash_nav/splash_nav';
import GreetingContainer from './greeting/greeting_container';



const Root = ({ store }) => {

  const handleSessionRedirect = (nextState, replace) => {
    store.dispatch(clearErrors('session'));
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
            onEnter={ handleSessionRedirect }
          />
          <Route
            path="/signup"
            component={ SessionFormContainer }
            onEnter={ handleSessionRedirect }
          />
          <Route path="/home"
            component={GreetingContainer}
            onEnter={ _ensureLoggedIn }
          />
        </Route>
      </Router>
    </Provider>
  );

};

export default Root;
