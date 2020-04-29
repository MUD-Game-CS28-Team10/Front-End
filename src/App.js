import React from 'react';
import { Route } from 'react-router-dom';

import Login from './authentication/Login'
import Registration from './authentication/Registration'

function App() {
  return (
    <div className="App">
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Registration} />
    </div>
  );
}

export default App;
