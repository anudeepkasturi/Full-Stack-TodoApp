import React from 'react';
import { Link } from 'react-router';

class ListIndexItem extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    let { title, id } = this.props;
    let path = `/${title}`.toLowerCase();
    return (
      <li className="list-index-item">
        <Link to={path}>{ title }</Link>
      </li>
    );
  }
}

export default ListIndexItem;
