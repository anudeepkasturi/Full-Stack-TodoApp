export const FETCH_LISTS = "FETCH_LISTS";
export const FETCH_LIST = "FETCH_LIST";
export const DESTROY_LIST = "DESTROY_LIST";
export const CREATE_LIST = "CREATE_LIST";
export const UPDATE_LIST = "UPDATE_LIST";

export const RECEIVE_ALL_LISTS = "RECEIVE_ALL_LISTS";
export const RECEIVE_LIST = "RECEIVE_LIST";
export const UNSELECT_LIST = "UNSELECT_LIST";

//middleware actions
export const fetchLists = () => ({
  type: FETCH_LISTS
});
export const fetchList = id => ({
  type: FETCH_LIST,
  id
});
export const destroyList = id => ({
  type: DESTROY_LIST,
  id
});
export const createList = list => ({
  type: CREATE_LIST,
  list
});
export const updateList = list => ({
  type: UPDATE_LIST,
  list
});

//reducer actions
export const receiveAllLists = lists => ({
  type: RECEIVE_ALL_LISTS,
  lists
});
export const receiveList = list => ({
  type: RECEIVE_LIST,
  list
});
export const unselectList = () => ({
  type: UNSELECT_LIST
});
