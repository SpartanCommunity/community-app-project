import React from 'react';
import './App.scss';
import Home from './pages/Home';
import MyOrgs from './pages/MyOrgs';
import Navbar from './components/Navbar/Navbar';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/my-orgs" component={MyOrgs} />
      </Switch>
    </>
  );
}

export default App;
