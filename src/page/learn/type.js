import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Markdown from 'react-markdown'
import codeBlock from './codeBlock'

function Type () {
  const [markdown, setMarkdown] = useState('')
  const [active, setActive] = useState('')

  function getData(type) {
    const mdFolder = process.env.PUBLIC_URL + '/markdown/'
    fetch(mdFolder + type + '.md')
      .then(res => res.text())
      .then(text => {
        setMarkdown(text)
        setActive(type)
      })
  }

  let { type } = useParams()

  useEffect(() => {
    if (type !== active) {
      getData(type)
    }
  })

  return (
    <Markdown source={markdown}
      renderers={{
        code: codeBlock
      }} />
  )
}

export default Type