import React from 'react';
import TaskIndexItem from './task_index_item';

class TasksIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchTasks();
  }

  render () {
    let { tasks } = this.props;
    return (
      <div className="tasks-index">
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
