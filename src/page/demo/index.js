import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { list, DemoHeight } from './list'

function CodePen () {
  const [id, setId] = useState(null)
  const [height, setHeight] = useState(DemoHeight[0])
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const height = e.target.value
    setHeight(height)
  }

  const setUrl = (data) => {
    if (!loading && (id !== data)) {
      setId(data)
      setLoading(true)
    }
  }

  const afterLoad = () => {
    setLoading(false)
  }

  const style = () => {
    return {
      height,
      width: '100%',
      opacity: Number(!loading)
    }
  }

  return (
    <>
      <header>
        <small><Link to="/"> back </Link></small>
        <h1>CodePen Demo</h1>
      </header>
      <p>
        <label htmlFor="selectLabal">Change Demo Height </label>
        <select value={height} onChange={handleChange} id="selectLabal">
          {DemoHeight.map(i =>
            <option key={i} value={i}>{i}</option>
          )}
        </select>
      </p>
      {list.map((item) =>
      <h3 key={item.id}
          className={item.id === id ? 'active' : 'link'}
          onClick={() => setUrl(item.id)}>{item.title}</h3>
      )}
      {loading &&
        <p>Demo is loading!</p>
      }
      {id &&
        <iframe style={style()} scrolling="no" title="React:JSX" src={`https://codepen.io/babytutu/embed/${id}?height=${height}&default-tab=js,result`} frameBorder="no" onLoad={afterLoad} />
      }
    </>
  )
}

export default CodePen