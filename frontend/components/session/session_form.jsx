import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      email: "none",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === "login") {
      return <Link to="/signup">sign up</Link>;
    } else {
      return <Link to="/login">log in</Link>;
    }
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

        <label>Username:
          <input
            id="username"
            type="text"
            value={this.state.username}
            onChange={this.update("username")}
            className="login-input"
            />
        </label>

        <label>Password:
          <input
            id="password"
            type="password"
            value={this.state.password}
            onChange={this.update("password")}
            className="login-input"
            />
        </label>

        {this.navLink()}

          <input type="submit"></input>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
