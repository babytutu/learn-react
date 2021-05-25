import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import RenderMarkdown from './node_modules/components/renderMarkdown'
import PageHeader from './node_modules/components/pageHeader'

function Learn(props) {
  const type = props.match.params.type
  const [markdown, setMarkdown] = useState('Loading')
  const [noteList, setNoteList] = useState([])

  useEffect(() => {
    if (!noteList.length) {
      fetch(process.env.PUBLIC_URL + '/data/menu.json')
      .then(res => res.json())
      .then(text => {
        setNoteList(text[0].children)
      })
    } else {
      const isActive = noteList.filter(i => i.id === type).length
      if (isActive) {
        fetch(process.env.PUBLIC_URL + `/markdown/${type}.md`)
          .then(res => res.text())
          .then(text => setMarkdown(text))
      } else {
        setMarkdown(`${type} not found!`)
      }
    }
  }, [type, noteList])


  return (
    <>
      <PageHeader {...props} />
      <ul>
        {noteList.map(data =>
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