import React from 'react';

import NavigationBarContainer from './nav_bar/nav_bar_container';
import SidebarContainer from './sidebar/sidebar';
import ListContainer from './lists/list_container';
import TaskDetailContainer from './tasks/task_detail_container';
import { withRouter } from 'react-router';

class UserPage extends React.Component {
  render () {
    let title = this.props.params.title || "Inbox";
    return (
      <div className="user-page">
        <NavigationBarContainer />
        <div className="page">
          <SidebarContainer />
          <div className="main-div">
            <h2>{ title }</h2>
            <div className="main-components">
              <ListContainer />
              <TaskDetailContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(UserPage);
