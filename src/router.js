import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './page/home/index';
import Learn from './page/learn/index'
import Demo from './page/demo/index'
import NoMath from './page/noMatch';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/Learn" component={Learn} />
        <Route path="/Demo" component={Demo} />
        <Route path="/" exact component={Home} />
        <Route path="*" component={NoMath} />
      </Switch>
    </Router>
  )
}

export default Routes