import React from 'react';
import TaskIndexItemContainer from './task_index_item_container';
import { withRouter } from 'react-router';

class TasksIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    let { tasks } = this.props;
    tasks = Object.keys(tasks).map(taskId => (
      <TaskIndexItemContainer
        id={taskId}
        title={tasks[taskId].title}
        completed={tasks[taskId].completed}
        description={tasks[taskId].description}
        due_date={tasks[taskId].due_date}
        key={taskId} />
    ));
    tasks = tasks.slice(0, tasks.length - 1);
    return (
      <div className="tasks-index">
        <ul>
          { tasks }
        </ul>
      </div>
    );
  }
}

export default TasksIndex;
