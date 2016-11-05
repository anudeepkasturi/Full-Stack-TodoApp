import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { clearErrors } from '../actions/error_actions';
import { fetchLists } from '../actions/list_actions';
import { fetchTasks } from '../actions/task_actions';
import App from './app';
import SessionFormContainer from './session/session_form_container';
import {HomeLink, SplashNav} from './splash_nav/splash_nav';
import UserPage from './user_page/user_page';
import ListsIndexContainer from './user_page/lists/lists_index_container';

const Root = ({ store }) => {

  const handleSessionRedirect = (nextState, replace) => {
    store.dispatch(clearErrors('session'));
    _redirectIfLoggedIn(nextState, replace);
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/inbox');
    }
  };

  const handleLogin = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    } else {
      store.dispatch(fetchLists());
      store.dispatch(fetchTasks());
    }
  };

  const loginRoute = (
    <Route
    path="/login"
    component={ SessionFormContainer }
    onEnter={ handleSessionRedirect }
  />
  );

  const signupRoute = (
    <Route
      path="/signup"
      component={ SessionFormContainer }
      onEnter={ handleSessionRedirect }
    />
  );

  const appRoute = (
    <Route path="/" component={App}>
      <IndexRoute component={SplashNav}/>
      {loginRoute}
      {signupRoute}

      <Route path="/inbox"
        component={ UserPage }
        onEnter={ handleLogin }/>
      <Route path="/:title" component={UserPage}>
          <Route path="/:id" />
        </Route>
    </Route>
  );

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        {appRoute}
      </Router>
    </Provider>
  );

};

export default Root;
