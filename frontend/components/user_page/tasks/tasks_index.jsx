import React from 'react';
import TaskIndexItemContainer from './task_index_item_container';

class TasksIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchTasks(this.props.list);
  }

  render () {
    let { tasks } = this.props;
    return (
      <div className="tasks-index">
        <ul>
          {Object.keys(tasks).map(taskId => (
            <TaskIndexItemContainer
              id={taskId}
              title={tasks[taskId].title}
              description={tasks[taskId].description}
              due_date={tasks[taskId].due_date}
              key={taskId} />
          ))}
        </ul>
      </div>
    );
  }
}

export default TasksIndex;
