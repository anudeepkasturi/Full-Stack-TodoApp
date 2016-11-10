import React from 'react';
import { SplashNav } from './splash_nav';

class SplashPage extends React.Component {
  constructor(props) {
    super(props);

    this.guestLogin = this.guestLogin.bind(this);
  }

  guestLogin() {
    this.props.router.push('/login');
    this.props.guestLogin();
  }

  render () {
    console.log(this.props);
    return (
      <div className="splash-page">
        <SplashNav />
        <div className="splash-main">
          <h2>Get stuff done!</h2>
          <input type="button"
            value="Guest Login"
            onClick={ this.guestLogin }>
          </input>
        </div>
      </div>
    );
  }
}

export default SplashPage;
