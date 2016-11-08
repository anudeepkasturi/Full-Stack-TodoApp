import React from 'react';
import ListsIndexContainer from '../lists/lists_index_container';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    let { title } = this.props;
    return (
      <div className="sidebar">
        <ListsIndexContainer />
      </div>
    );
  }
}

export default Sidebar;
