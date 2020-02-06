import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Routes } from './routes'
import BackToHome from 'components/backToHome'

function RouteList () {
  return (
    <Router>
      <BackToHome />
      <Switch>
        {Routes.map(item =>
          <Route key={item.path}
                path={item.path}
                exact={item.exact}
                render={(props) => <item.component {...props} meta={item.meta} />}
          />
        )}
      </Switch>
    </Router>
  )
}

export default RouteList