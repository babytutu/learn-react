import React from 'react'
import {
  NavLink,
  useRouteMatch,
} from 'react-router-dom'

import { list } from './list'
import BackToTop from '../../components/backToTop'
import PageHeader from '../../components/pageHeader'
import Demo from './demo'

function CodepenDemo ({ path }) {
  let match = useRouteMatch(path + "/:id");

  if (match) {
    // Do whatever you want with the match...
    return <Demo id={match.params.id} />
  } else {
    return null
  }
}

function CodePen (props) {
  const path = props.match.path
  return (
    <>
      <header>
        <PageHeader {...props} />
        <BackToTop />
      </header>
      <ul>
        {list.map((item) =>
          <li key={item.id}>
            <NavLink to={path + '/' + item.id}>{item.title}</NavLink>
          </li>
        )}
      </ul>
      <CodepenDemo path={path} />
    </>
  )
}

export default CodePen