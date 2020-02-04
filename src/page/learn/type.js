import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown'
import codeBlock from './codeBlock'

function Type (props) {
  const type = props.type
  const [markdown, setMarkdown] = useState('')

  useEffect(() => {
    getData(type)
  }, [type])

  function getData(type) {
    const mdFolder = process.env.PUBLIC_URL + '/markdown/'
    fetch(mdFolder + type + '.md')
      .then(res => res.text())
      .then(text => setMarkdown(text))
  }

  return (
    <Markdown source={markdown}
      renderers={{
        code: codeBlock
      }} />
  )
}

export default Type