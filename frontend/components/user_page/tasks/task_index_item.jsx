import React from 'react';
import { Link, withRouter } from 'react-router';

class TaskIndexItem extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    let { title, id } = this.props.task;
    let path = `home/${this.props.params.title || "inbox"}/${id}`;
    return (
      <li className="task-index-item">
        <Link to={path}>{ title }</Link>
      </li>
    );
  }
}

export default withRouter(TaskIndexItem);
