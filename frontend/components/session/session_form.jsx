import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.username_error_msg = "";
    this.password_error_msg = "";

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value
    });
  }

  componentWillReceiveProps(newProps) {
    let errors = newProps.errors;
    this.handleErrors(errors);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  navLink() {
    let spanText;
    let linkText;
    let path;

    if (this.props.formType === "login") {
      spanText = "Don't have an account?";
      linkText = "Sign Up";
      path = "/signup";
    } else {
      spanText = "Been here before?";
      linkText = "Log In";
      path = "/login";
    }

    return (
      <div className="change-form-type">
        <p>or</p>
        <span>{spanText}<Link to={path}>{linkText}</Link></span>
      </div>
    );
  }

  handleErrors(errors) {
    this.username_error_msg = "";
    this.password_error_msg = "";
    return errors.map(error => {
      if(error.includes("Username")) {
        this.username_error_msg = error;
      } else {
        this.password_error_msg = error;
      }
    });
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
          <p className="error-msg">{this.username_error_msg}</p>

          <input
            id="password"
            placeholder="Password"
            type="password"
            value={this.state.password}
            onChange={this.update("password")}
            className="login-input"
            />
          <p className="error-msg">{this.password_error_msg}</p>

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
