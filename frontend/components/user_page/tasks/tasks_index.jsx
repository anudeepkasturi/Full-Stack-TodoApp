import React from 'react';
import TaskIndexItem from './task_index_item';

class TasksIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    let { tasks } = this.props;
    return (
      <div>
        <ul>
          {Object.keys(tasks).map(taskId => (
            <TaskIndexItem
              task={tasks[taskId]}
              key={taskId} />
          ))}
        </ul>
      </div>
    );
  }
}

export default TasksIndex;
