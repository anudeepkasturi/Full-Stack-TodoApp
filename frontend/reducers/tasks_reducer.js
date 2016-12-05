import {
  RECEIVE_ALL_TASKS,
  UPDATE_TASK,
  CREATE_TASK,
  DESTROY_TASK,
  RECEIVE_TASK
} from '../actions/task_actions';

import merge from 'lodash/merge';

let defaultState = {};

const TasksReducer = (state = defaultState, action) => {
  Object.freeze(state);

  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_ALL_TASKS:
      return action.tasks;
    case CREATE_TASK:
    case RECEIVE_TASK:
      newState[action.task.id] = action.task;
      return newState;
    case DESTROY_TASK:
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default TasksReducer;
