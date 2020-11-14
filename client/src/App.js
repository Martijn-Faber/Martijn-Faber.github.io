import React from 'react';

import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';
import creategroup from './components/Join/creategroup';
import joingroup from './components/Join/joingroup';

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={Chat} />
      <Route path="/create" component={creategroup} />
      <Route path="/join" component={joingroup} />
    </Router>
  );
}

export default App;
