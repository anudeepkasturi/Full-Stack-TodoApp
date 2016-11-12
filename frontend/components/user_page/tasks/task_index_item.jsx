import React from 'react';
import { Link, withRouter } from 'react-router';

class TaskIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.selectTask(this.props.id);
  }

  render () {
    let { title, id, completed } = this.props;
    let path = `home/${ this.props.params.listId || "inbox" }/${id}`;
    let completedClass = completed ? " completed" : "";
    let klass = "task-index-item" + completedClass;
    return (
      <li className={klass}>
        <Link to={path} onClick={ this.handleClick }>{ title }</Link>
      </li>
    );
  }
}


export default withRouter(TaskIndexItem);
