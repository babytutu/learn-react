import React from 'react'

function PageHeader ({ meta }) {
  if (meta && meta.title) {
    return <h2>{meta.title}</h2>
  } else {
    return null
  }
}

export default PageHeader