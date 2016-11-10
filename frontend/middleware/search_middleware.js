import { FETCH_DATA } from '../actions/search_actions';
import { receiveAllTasks } from '../actions/task_actions';
import {
  fetchData
} from '../util/search_api_util.js';

let defaultState = {};

const SearchMiddleware = ({ dispatch }) => next => action => {
  const searchSuccess = data => {
    console.log(data);
    dispatch(receiveAllTasks(data));
  };
  const searchError = data => console.log(data.responseText);

  switch (action.type) {
    case FETCH_DATA:
      fetchData(action.query, searchSuccess, searchError);
    default:
      return next(action);
  }
};

export default SearchMiddleware;
