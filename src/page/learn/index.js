import React from 'react';
import {
  Link,
  Switch,
  Route,
} from "react-router-dom";
import { DataList } from './data'
import './index.css'
import Type from './type'

class Learn extends React.Component {

  isActive = (data) => {
    return this.props.match.params.type === DataList[data]['type'] ? 'active' : null
  }

  render () {
    const { match } = this.props
    return (
      <>
        <h2>Learn</h2>
        <ul>
          {Object.keys(DataList).map(data =>
            <li key={data} className={this.isActive(data)}>
              <Link to={'/Learn/' + DataList[data]['type']}>{DataList[data]['type']}</Link>
            </li>
          )}
        </ul>
        {this.props.children}
        <Switch>
          <Route path={`${match.path}/:type`} component={Type} />
          <Route path={match.path}>
            <h3>Please select a type.</h3>
          </Route>
        </Switch>
        <Link to="/">Home</Link>
      </>
    )
  }

}

export default Learn;
