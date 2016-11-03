import React from 'react';
import { Link } from 'react-router';

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
        <button className="header-button" onClick={this.handleLogout}>Log Out</button>
      </hgroup>
    );
  }
}


export default Greeting;
