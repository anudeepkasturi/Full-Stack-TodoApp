import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => (
  <div>
    <h1>Todo App</h1>
    <GreetingContainer />
    {children}
  </div>
);

export default App;
