import React from 'react';
import { render } from "react-dom"
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './index.css'
import Home from './page/home/index';
import Learn from './page/learn/index'
import Demo from './page/demo/index'

import * as serviceWorker from './serviceWorker';

render((
  <Router basename="/learn-react">
    <Switch>
      <Route path="/Learn" component={Learn} />
      <Route path="/Demo" component={Demo} />
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
