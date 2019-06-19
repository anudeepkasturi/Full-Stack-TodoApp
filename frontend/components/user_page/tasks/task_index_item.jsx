import React from 'react';
import { Link, withRouter } from 'react-router';

class TaskIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleClick() {
    console.log('k');
    this.props.selectTask(this.props.id);
  }

  handleDelete() {
    this.props.destroyTask(this.props.id);
    this.props.router.push(`/home/${this.props.listId}`);
  }

  render () {
    let { title, id, completed } = this.props;
    let path = `home/${ this.props.params.listId || "inbox" }/${id}`;
    let completedClass = completed ? " completed" : "";
    let klass = "task-index-item" + completedClass;
    return (
      <li className={klass}>
        <Link to={path} onClick={ this.handleClick }>{ title }
        <button onClick={ this.handleDelete }>x</button>
        </Link>
      </li>
    );
  }
}

export default withRouter(TaskIndexItem);
