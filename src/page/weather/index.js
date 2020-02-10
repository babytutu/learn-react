import React, { useState, useEffect } from 'react'
import { weatherAPI, cityList } from 'data/list'
import PageHeader from 'components/pageHeader'

function Apis (props) {
  const [load, setLoad] = useState(true)
  const [res, setRes] = useState({})
  const [city, setCity] = useState('杭州')
  const [input, setInput] = useState('')
  useEffect(() => {
    setLoad(true)
    if (city) {
      fetch(weatherAPI + city)
          .then(res => res.json())
          .then(text => {
            if (text.status === 1000) {
              setRes(text.data)
            } else {
              setRes(text.desc)
            }
            setLoad(false)
          })
        }
  }, [city])

  const handleSubmit = (e) => {
    e.preventDefault()
    setCity(input)
  }

  const handleReset = (e) => {
    e.preventDefault()
    setInput('')
  }

  const handleClick = (i) => {
    setCity(i)
    setInput('')
  }

  return (
    <div>
      <PageHeader {...props} />
      <ul>
        {cityList.map(i =>
          <li key={i} className={i === city ? 'active' : ''}>
            <span onClick={() => handleClick(i)}>{i}</span>
          </li>
        )}
      </ul>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <input placeholder="请输入城市名称" value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit">查询</button>
        <button type="reset">清除</button>
      </form>
      {city && load && <p>loading</p>}
      {!load && res.city &&
        <>
          <h3>{res.city}</h3>
          <ul>
            {res.forecast.map(i =>
              <li key={i.date}>{i.date}【{i.type}】
                <ul>
                  <li>{i.low} - {i.high}</li>
                </ul>
              </li>
            )}
          </ul>
        </>
      }
      {!load && !res.city && <p>{res}</p>}
    </div>
  )
}

export default Apis