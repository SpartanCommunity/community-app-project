import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';

//Import each page to create a link for them
import Home from './pages/Home';
import Orgs from './pages/Orgs';
import Events from './pages/Events';
import SignUp from './pages/SignUp';
import Error from './pages/Error';

import { Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <section>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/orgs" component={Orgs} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/login" component={SignUp} />
        <Route exact path="/404" component={Error} />
        <Redirect to="/404" />
      </Switch>
    </section>
  );
}

export default App;
