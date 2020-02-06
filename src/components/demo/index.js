import React, { useState, useEffect } from 'react'

function Demo ({ url }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => setLoading(true), [url])

  return (
    <>
      {loading && <p>loading</p>}
      <iframe height="600" width="100%"
        scrolling="no"
        frameBorder="no"
        style={{'opacity': Number(!loading)}}
        src={url}
        title="Demo"
        onLoad={() => setLoading(false)}></iframe>
    </>
  )
}

export default Demo