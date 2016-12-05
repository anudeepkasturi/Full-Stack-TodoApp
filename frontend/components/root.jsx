import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { clearErrors } from '../actions/error_actions';
import { fetchLists, fetchList } from '../actions/list_actions';
import { fetchTasks, fetchTask } from '../actions/task_actions';
import { fetchData } from '../actions/search_actions';
import App from './app';
import SessionFormContainer from './session/session_form_container';
import {HomeLink, SplashNav} from './splash_nav/splash_nav';
import SplashPageContainer from './splash_nav/splash_page_container';
import UserPageContainer from './user_page/user_page_container';
import ListsIndexContainer from './user_page/lists/lists_index_container';
import TaskDetailContainer from './user_page/tasks/task_detail_container';
import findKey from 'lodash/findKey';


const Root = ({ store }) => {

  const handleSessionRedirect = (nextState, replace) => {
    store.dispatch(clearErrors('session'));
    _redirectIfLoggedIn(nextState, replace);
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/home');
    }
  };

  const handleLogin = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const handleIndex = (nextState, replace) => {
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

  const renderListnTasks = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    } else {
      if(nextState.params.listId === 'inbox') {
        store.dispatch(fetchTasks());
      } else {
        store.dispatch(fetchList(nextState.params.listId));
        store.dispatch(fetchTasks(nextState.params.listId));
      }
    }
  };

  const renderTask = (nextState, replace) => {
    store.dispatch(fetchTask(nextState.params.id));
  };

  const appRoute = (
    <Route path="/" component={App}>
      <IndexRoute component={ SplashPageContainer } />
      {loginRoute}
      {signupRoute}

      <Route path="/home" component={ UserPageContainer } >
        <IndexRoute onEnter={ handleIndex } />
      </Route>

      <Route path="/home/:listId"
        component={ UserPageContainer }
        onEnter={ renderListnTasks }>

        <Route path=":id"
          component={ TaskDetailContainer }
          onEnter={ renderTask }>
        </Route>
      </Route>

      <Route path="/search"
        component={ UserPageContainer }
        onEnter={ handleIndex }
        onLeave={ () => store.dispatch(fetchData('')) }>
        <Route path=":id"
          component={ TaskDetailContainer }
          onEnter={ handleLogin }>
        </Route>
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
