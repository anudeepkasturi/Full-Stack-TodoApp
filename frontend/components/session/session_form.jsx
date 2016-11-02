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
      return (
        <div className="change-form-type">
          <p>or</p>
          <span><Link to="/signup">Sign Up</Link>for free!</span>
      </div>
      );
    } else {
      return (
        <div className="change-form-type">
          <p>or</p>
          <span>Been here before?<Link to="/login">Log In</Link></span>
        </div>
      );
    }
  }

  render () {

    let submitButtonText = (this.props.formType === "login") ?
      "Log In" : "Sign Up";

    return (
      <div className="session-form-container">
        <form className="session-form" onSubmit={this.handleSubmit}>


          <input
            id="username"
            placeholder="Username"
            type="text"
            value={this.state.username}
            onChange={this.update("username")}
            className="login-input"
            />

          <input
            id="password"
            placeholder="Password"
            type="password"
            value={this.state.password}
            onChange={this.update("password")}
            className="login-input"
            />

          <input
            className="session-form-submit"
            type="submit"
            value={submitButtonText}>
          </input>

          {this.navLink()}
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
