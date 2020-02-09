import React, { useState } from 'react'
import { codepenList, codepenURL } from 'data/list'
import PageHeader from 'components/pageHeader'
import Demo from 'components/demo'

function CodePen (props) {
  const [type, setType] = useState('')
  const url = codepenURL(type)

  return (
    <>
      <PageHeader {...props} />
      <ul>
        {codepenList.map((item) =>
          <li key={item.id} className={type === item.id ? 'active' : null}>
            <span onClick={() => setType(item.id)}>{item.title}</span>
          </li>
        )}
      </ul>
      {type && url &&
        <Demo url={url} />
      }
    </>
  )
}

export default CodePen