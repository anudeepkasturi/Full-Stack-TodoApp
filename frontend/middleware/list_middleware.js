import {
  FETCH_LISTS,
  FETCH_LIST,
  DESTROY_LIST,
  CREATE_LIST,
  UPDATE_LIST,
  receiveAllLists,
  receiveList
} from '../actions/list_actions';

import { receiveErrors } from '../actions/error_actions';

import {
  fetchLists,
  fetchList,
  destroyList,
  createList,
  updateList
} from '../util/list_api_util';

const ListMiddelware = ( { dispatch } ) => next => action => {
  const allListsSuccess = lists => dispatch(receiveAllLists(lists));
  const listSuccess = list => dispatch(receiveList(list));
  const errorCB = errors =>
  dispatch(receiveErrors('list', errors.responseJSON));

  switch (action.type) {
    case FETCH_LISTS:
      fetchLists(allListsSuccess, errorCB);
      break;
    case FETCH_LIST:
      fetchList(action.id, listSuccess, errorCB);
      break;
    case DESTROY_LIST:
      destroyList(action.id, () => next(action), errorCB);
      break;
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
