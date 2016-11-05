export const FETCH_TASKS = "FETCH_TASKS";
export const FETCH_TASK = "FETCH_TASK";
export const DESTROY_TASK = "DESTROY_TASK";
export const CREATE_TASK = "CREATE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";

export const RECEIVE_ALL_TASKS = "RECEIVE_ALL_TASKS";
export const RECEIVE_TASK = "RECEIVE_TASK";
export const UNSELECT_TASK = "UNSELECT_TASK";

export const fetchTasks = () => ({
  type: FETCH_TASKS
});
export const fetchTask = (id) => ({
  type: FETCH_TASK,
  id
});
export const destroyTask = (id) => ({
  type: DESTROY_TASK,
  id
});
export const createTask = task => ({
  type: CREATE_TASK,
  task
});
export const updateTask = task => ({
  type: UPDATE_TASK,
  task
});

export const receiveAllTasks = tasks => ({
  type: RECEIVE_ALL_TASKS,
  tasks
});
export const receiveTask = task => ({
  type: RECEIVE_TASK,
  task
});
export const unselectList = () => ({
  type: UNSELECT_TASK
});
