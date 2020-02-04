import React from 'react';
import {
  NavLink,
  useRouteMatch,
} from 'react-router-dom'

import { DataList } from './data'
import Type from './type'
import Back from './../../components/back'

function Markdown() {
  let match = useRouteMatch("/Learn/:type");

  if (match) {
    // Do whatever you want with the match...
    return <Type type={match.params.type} />
  } else {
    return null
  }
}

function Learn(props) {
  const { match } = props
  return (
    <>
      <header>
        <h2>Learn List</h2>
        <Back />
      </header>
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
      {props.children}
      <Markdown />
    </>
  )
}



export default Learn