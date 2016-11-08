import React from 'react';
import { Link } from 'react-router';

class ListIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.fetchTasks(this.props.id);
  }

  render () {
    let { title, id } = this.props;
    let path = `/home/${title}`;
    return (
      <li className="list-index-item">
        <Link to={path} onClick={this.handleClick}>{ title }</Link>
        <button>∇</button>
      </li>
    );
  }
}

export default ListIndexItem;
