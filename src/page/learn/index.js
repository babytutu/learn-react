import React from 'react';
import {
  Switch,
  Route,
  NavLink,
  Redirect,
  Link,
} from 'react-router-dom'

import { DataList } from './data'
import Type from './type'

function Learn(props) {
  const { match } = props
  return (
    <>
      <header>
        <small><Link to="/"> back </Link></small>
        <h1>Learn List</h1>
      </header>
        {DataList.map(data =>
          <h3 key={data.name}>
            <NavLink
                to={match.path + '/' + data.name}>
                  {data.name}@<em>{data.version}</em>
            </NavLink>
          </h3>
        )}
      {props.children}
      <Switch>
        <Route path={`${match.path}/:type`} component={Type} />
        <Redirect from={match.path} to={`${match.path}/${DataList[0].name}`} />
      </Switch>
    </>
  )
}

export default Learn