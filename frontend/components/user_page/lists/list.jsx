import React from 'react';
import TasksIndexContainer from '../tasks/tasks_index_container';
import NewTaskContainer from '../tasks/new_task_container';

class List extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (
      <div className="list">
        <NewTaskContainer />
        <TasksIndexContainer />
      </div>
    );
  }
}

export default List;
