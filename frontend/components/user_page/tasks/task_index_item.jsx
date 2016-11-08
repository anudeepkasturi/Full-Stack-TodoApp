import React from 'react';
import { Link, withRouter } from 'react-router';

class TaskIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.props);
    this.props.fetchTask(this.props.id);
    this.props.selectTask(this.props.id);
  }

  render () {
    let { title, id } = this.props;
    let path = `home/${this.props.params.title || "inbox"}/${id}`;
    return (
      <li className="task-index-item">
        <Link to={path} onClick={ this.handleClick }>{ title }</Link>
      </li>
    );
  }
}

export default withRouter(TaskIndexItem);
