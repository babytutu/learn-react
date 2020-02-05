import React, { useState } from 'react'
import { DemoHeight } from 'data/demoList'

function Demo (props) {
  const [height, setHeight] = useState(DemoHeight[0])
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const height = e.target.value
    setHeight(height)
  }

  const style = () => {
    return {
      height,
      width: '100%',
      opacity: Number(!loading)
    }
  }

  const { id } = props

  return (
    <>
      <p>
        <label htmlFor="selectLabal">Change Demo Height </label>
        <select value={height} onChange={handleChange} id="selectLabal">
          {DemoHeight.map(i =>
            <option key={i} value={i}>{i}</option>
          )}
        </select>
      </p>
      <iframe style={style()} scrolling="no" title="React:Demo" src={`https://codepen.io/babytutu/embed/${id}?height=${height}&default-tab=js,result`} frameBorder="no" onLoad={() => setLoading(false)}></iframe>
    </>
  )
}

export default Demo