import {
  FETCH_TASKS,
  FETCH_TASK,
  DESTROY_TASK,
  CREATE_TASK,
  UPDATE_TASK,
  receiveAllTasks,
  receiveTask
} from '../actions/task_actions';

import { receiveErrors } from '../actions/error_actions';

import {
  fetchTasks,
  fetchTask,
  destroyTask,
  createTask,
  updateTask
} from '../util/task_api_util';

let defaultState = {};

const TaskMiddleware = ({ dispatch }) => next => action => {
  const allTasksSuccess = tasks => dispatch(receiveAllTasks(tasks));
  const taskSuccess = task => dispatch(receiveTask(task));
  const errorCB = errors =>
    dispatch(receiveErrors('task', errors.responseJSON));

    if(action.listId === undefined) {
      action.listId = 0;
    }

  switch (action.type) {
    case FETCH_TASKS:
      fetchTasks(allTasksSuccess, errorCB, action.listId);
      break;
    case FETCH_TASK:
      fetchTask(action.id, taskSuccess, errorCB);
      break;
    case DESTROY_TASK:
      destroyTask(action.id, () => next(action), errorCB);
      break;
    case CREATE_TASK:
      createTask(action.task, taskSuccess, errorCB);
      break;
    case UPDATE_TASK:
      updateTask(action.task, taskSuccess, errorCB);
      return next(action);
    default:
      return next(action);
  }
};

export default TaskMiddleware;
