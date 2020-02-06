import React from 'react'
import {
  NavLink,
  useParams,
} from 'react-router-dom'

import { codepenList, codepenURL } from 'data/list'
import PageHeader from 'components/pageHeader'
import Demo from 'components/demo'

function CodePen (props) {
  const { type } = useParams()
  const url = codepenURL(type)

  return (
    <>
      <PageHeader {...props} />
      <ul>
        {codepenList.map((item) =>
          <li key={item.id} className={type === item.id ? 'active' : null}>
            <NavLink exact to={item.id}>{item.title}</NavLink>
          </li>
        )}
      </ul>
      {url &&
        <Demo url={url} />
      }
    </>
  )
}

export default CodePen