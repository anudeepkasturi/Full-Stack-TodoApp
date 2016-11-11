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
    return (
      <div className="splash-page">
        <SplashNav />
        <div className="splash-main">
          <div className="header">
            <h1>Organize your To Do List. Get stuff done!</h1>
            <input type="button"
              value="Guest Login"
              onClick={ this.guestLogin }>
            </input>
          </div>
          <div className="image">
            <img src='assets/splash_image.png'></img>
          </div>
        </div>
      </div>
    );
  }
}

export default SplashPage;
