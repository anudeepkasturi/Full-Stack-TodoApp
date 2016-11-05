import React from 'react';
import TasksIndexContainer from '../tasks/tasks_index_container';

class List extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (
      <div className="list">
        <TasksIndexContainer />
      </div>
    );
  }
}

export default List;
