import React from 'react';
import { Route } from 'react-router-dom';

import Login from './authentication/Login';
import Registration from './authentication/Registration';
import Game from './components/Game';

import './index.scss';

function App() {
  return (
    <div className="App">
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Registration} />
      <Route exact path="/game" component={Game} />
    </div>
  );
}

export default App;
