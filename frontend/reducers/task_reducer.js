import {
  RECEIVE_ALL_TASKS,
  RECEIVE_TASK,
  DESTROY_TASK,
  UNSELECT_TASK
} from '../actions/task_actions';

import merge from 'lodash/merge';

let defaultTaskState = {};

const TaskReducer = (state = defaultTaskState, action) => {
  Object.freeze(state);

  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_TASK:
      return action.task;
    case DESTROY_TASK:
    case UNSELECT_TASK:
      return defaultTaskState;
    default:
      return state;
  }
};

export default TaskReducer;
