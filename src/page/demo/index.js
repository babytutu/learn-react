import React from 'react'
import {
  NavLink,
  useRouteMatch,
} from 'react-router-dom'

import { list } from './list'
import Back from './../../components/back'
import Demo from './demo'

function CodepenDemo () {
  let match = useRouteMatch("/Demo/:id");

  if (match) {
    // Do whatever you want with the match...
    return <Demo id={match.params.id} />
  } else {
    return null
  }
}

function CodePen (props) {
  return (
    <>
      <header>
        <h2>CodePen Demo</h2>
        <Back />
      </header>
      <ul>
        {list.map((item) =>
          <li key={item.id}>
            <NavLink
                to={props.match.path + '/' + item.id}>{item.title}
            </NavLink>
          </li>
        )}
      </ul>
      <CodepenDemo />
    </>
  )
}

export default CodePen