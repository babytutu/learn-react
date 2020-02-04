import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown'
import codeBlock from './codeBlock'

function Type (props) {
  const [markdown, setMarkdown] = useState('')

  function getData(type) {
    const mdFolder = process.env.PUBLIC_URL + '/markdown/'
    fetch(mdFolder + type + '.md')
      .then(res => res.text())
      .then(text => {
        setMarkdown(text)
      })
  }

  const type = props.type

  useEffect(() => {
    getData(type)
  }, [type])

  return (
    <Markdown source={markdown}
      renderers={{
        code: codeBlock
      }} />
  )
}

export default Type