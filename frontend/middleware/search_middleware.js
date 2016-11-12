import { FETCH_DATA } from '../actions/search_actions';
import { receiveAllTasks } from '../actions/task_actions';
import {
  fetchData
} from '../util/search_api_util.js';

let defaultState = {};

const SearchMiddleware = ({ dispatch }) => next => action => {
  const searchSuccess = data => {
    dispatch(receiveAllTasks(data));
  };
  const searchError = data => {};

  switch (action.type) {
    case FETCH_DATA:
      fetchData(action.query, searchSuccess, searchError);
    default:
      return next(action);
  }
};

export default SearchMiddleware;
