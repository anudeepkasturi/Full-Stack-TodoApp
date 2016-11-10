import React from 'react';

import NavigationBarContainer from './nav_bar/nav_bar_container';
import Sidebar from './sidebar/sidebar';
import ListContainer from './lists/list_container';
import { withRouter } from 'react-router';

class UserPage extends React.Component {


  render () {

    let title = this.props.params.title || "Inbox";
    return (
      <div className="user-page">
        <NavigationBarContainer />
        <div className="page">
          <Sidebar />
          <div className="main-div">
            <h2>{ title }</h2>
            <div className="main-components">
              <ListContainer />
              { this.props.children }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(UserPage);
