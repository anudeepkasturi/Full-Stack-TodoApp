import React from 'react';
import { withRouter, Link } from 'react-router';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
    this.props.router.replace("/");
  }

  render () {
    let { currentUser } = this.props;
    return (
      <hgroup className="header-group">
        <h2>Hello, {currentUser.username}!</h2>
        <Link to="/" onClick={this.handleLogout}>Log Out</Link>
      </hgroup>
    );
  }
}


export default withRouter(Greeting);
