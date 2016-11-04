import React from 'react';
import ListsIndexContainer from '../lists/lists_index_container';

class Sidebar extends React.Component {
  render () {
    return (
      <div className="sidebar">
        <ListsIndexContainer />
      </div>
    );
  }
}

export default Sidebar;
