import React from 'react';

import NavigationBarContainer from './nav_bar/nav_bar_container';
import SidebarContainer from './sidebar/sidebar';
import ListContainer from './lists/list_container';


class UserPage extends React.Component {
  render () {
    return (
      <div className="user-page">
        <NavigationBarContainer />
        <SidebarContainer />
        <ListContainer />
      </div>
    );
  }
}

export default UserPage;
