import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home'
import About from './About'
import Service from './Service'
import Contact from './Contact'
import NevBar from './NevBar'
import { Switch, Route, Redirect } from 'react-router-dom';

const App = () => {
  return (
    <>
      <NevBar></NevBar>
      <Switch>
        <Route exact path="/" component={Home} ></Route>
        <Route exact path="/about" component={About} ></Route>
        <Route exact path="/service" component={Service} ></Route>
        <Route exact path="/contact" component={Contact} ></Route>
        <Redirect to="/"></Redirect>
      </Switch>
    </>
  );
}

export default App;
