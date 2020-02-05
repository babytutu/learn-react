import React from 'react'
import {
  NavLink,
  useRouteMatch,
} from 'react-router-dom'

import { LearnList } from 'data/learnList'
import Type from './type'
import BackToTop from 'components/backToTop'
import PageHeader from 'components/pageHeader'

function Markdown({ path }) {
  let match = useRouteMatch(path + "/:type")

  if (!match) {
    return null
  }

  const type = match.params && match.params.type

  let isActive = LearnList.map(i => i.name).includes(type)

  if (match && isActive) {
    // Do whatever you want with the match...
    return <Type type={type} />
  } else {
    return <p>{type} Not Found!</p>
  }
}

function Learn(props) {
  const path = props.match.path
  return (
    <>
      <header>
        <PageHeader {...props} />
        <BackToTop />
      </header>
      <ul>
        {LearnList.map(data =>
          <li key={data.name}>
            <NavLink to={path + '/' + data.name}>{data.name}@{data.version}</NavLink>
          </li>
        )}
      </ul>
      {props.children}
      <Markdown path={path} />
    </>
  )
}

export default Learn