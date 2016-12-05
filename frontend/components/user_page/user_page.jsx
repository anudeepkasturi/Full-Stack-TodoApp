import React from 'react';

import NavigationBarContainer from './nav_bar/nav_bar_container';
import Sidebar from './sidebar/sidebar';
import ListContainer from './lists/list_container';
import ListSummaryContainer from './lists/list_summary_container';
import { withRouter } from 'react-router';

class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.title = "";
  }

  componentDidUpdate() {
    let { listId } = this.props.params;
    if (listId && this.props.lists[listId]) {
      this.title = this.props.lists[listId].title || "";
    } else {
      this.title = "Inbox";
    }
  }

  render () {
    return (
      <div className="user-page">
        <NavigationBarContainer />
        <div className="page">
          <Sidebar />
          <div className="main-div">
            <div className="title">
              <h2>{ this.title || "Inbox" }</h2>
            </div>
            <div className="main-components">
              <ListContainer />
              <ListSummaryContainer />
              { this.props.children }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(UserPage);
