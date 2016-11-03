import {
  FETCH_LISTS,
  FETCH_LIST,
  DESTROY_LIST,
  CREATE_LIST,
  UPDATE_LIST,
  receiveAllLists,
  receiveList,
  receiveErrors
} from '../actions/list_actions';

import {
  fetchLists,
  fetchList,
  destroyList,
  createList,
  updateList
} from '../util/list_api_util';

const ListMiddelware = ({ dispatch }) => next => action => {
  const allListsSuccess = lists => dispatch(receiveAllLists());
  const listSuccess = list => dispatch(receiveList());
  const errorCB = errors => dispatch(receiveErrors(errors.responseJSON));

  switch (action.type) {
    case FETCH_LISTS:
      fetchLists(allListsSuccess, errorCB);
      return next(action);
    case FETCH_LIST:
      fetchList(action.id, listSuccess, errorCB);
      return next(action);
    case DESTROY_LIST:
      
    case CREATE_LIST:
      createList(action.list, listSuccess, errorCB);
      return next(action);
    case UPDATE_LIST:
      updateList(action.list, listSuccess, errorCB);
      return next(action);
    default:
      next(action);
  }
};

export default ListMiddelware;
