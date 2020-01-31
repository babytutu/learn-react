import React from 'react';
import {
  Link,
  NavLink,
  Switch,
  Route,
} from "react-router-dom";
import { DataList } from './data'
import './index.css'
import Type from './type'

class Learn extends React.Component {

  state = {
    type: ''
  }

  render () {
    const { match } = this.props
    return (
      <>
        <h2>LearnList</h2>
        <ul>
          {DataList.map(data =>
            <li key={data.name}>
              <NavLink
                  to={match.path + '/' + data.name}>
                    {data.name}@<em>{data.version}</em>
              </NavLink>
            </li>
          )}
        </ul>
        {this.props.children}
        <Switch>
          <Route path={`${match.path}/:type`} component={Type} />
          <Route path={match.path}>
            <h3>Please select something to Learn.</h3>
          </Route>
        </Switch>
        <Link to="/">Home</Link>
      </>
    )
  }

}

export default Learn;
