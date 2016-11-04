import React from 'react';
import GreetingContainer from './greeting_container';

class NavigationBar extends React.Component {
  render () {
    return (
      <div className="nav-bar-container">
        <div className="nav-bar">
          <GreetingContainer />
        </div>
      </div>
    );
  }
}

export default NavigationBar;
