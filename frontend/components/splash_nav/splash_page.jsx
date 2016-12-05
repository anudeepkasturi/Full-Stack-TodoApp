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
          <div className="image-container">
            <div className="image">

              <div className="header">
                <h1>Taskable</h1>
                <input type="button"
                  value="Guest Login"
                  onClick={ this.guestLogin }>
                </input>
                <div className="hr-div">
                  <hr></hr>
                </div>
                <h2>The fastest way to organize your to do lists. Get stuff done & be more productive!</h2>
              </div>
              <img src='assets/splash_bg.jpg'></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SplashPage;
