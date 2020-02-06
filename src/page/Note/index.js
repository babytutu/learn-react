import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { NoteList } from 'data/list'
import RenderMarkdown from 'components/renderMarkdown'
import PageHeader from 'components/pageHeader'

function Learn(props) {
  const type = props.match.params.type
  const [markdown, setMarkdown] = useState('Loading')

  useEffect(() => {
    getData(type)
  }, [type])

  function getData(type) {
    const isActive = NoteList.filter(i => i.id === type).length
    if (isActive) {
      fetch(`markdown/${type}.md`)
        .then(res => res.text())
        .then(text => setMarkdown(text))
    } else {
      setMarkdown(`${type} not found!`)
    }
  }

  return (
    <>
      <PageHeader {...props} />
      <ul>
        {NoteList.map(data =>
          <li key={data.id} className={type === data.id ? 'active' : null}>
            <NavLink to={data.id}>{data.title}</NavLink>
          </li>
        )}
      </ul>
      {type && <RenderMarkdown markdown={markdown} />}
    </>
  )
}

export default Learn