import React from 'react';
import './App.scss';
import Home from './pages.Home';
import MyOrgs from './pages.MyOrgs';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/my-orgs" component={MyOrgs} />
      </Switch>
    </>
  );
}

export default App;
