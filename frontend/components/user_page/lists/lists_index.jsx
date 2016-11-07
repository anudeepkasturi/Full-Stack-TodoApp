import React from 'react';
import { Link } from 'react-router';

import ListIndexItem from './list_index_item';

class ListsIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    let { lists } = this.props;
    console.log(this.props);

    return (
      <div>
        <ul>
          <li key="0" className="list-index-item">
            <Link to="/inbox">Inbox</Link>
          </li>

          {Object.keys(lists).map(listId => (
            <ListIndexItem
              id={listId}
              title={lists[listId].title}
              key={listId}/>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListsIndex;
