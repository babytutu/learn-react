import React, { useState, useEffect } from 'react'
import { weatherUrl, cityList } from 'data/list'
import PageHeader from 'components/pageHeader'

function Apis (props) {
  const [load, setLoad] = useState(true)
  const [res, setRes] = useState({})
  const [city, setCity] = useState('杭州')
  const [input, setInput] = useState('')
  useEffect(() => {
    setLoad(true)
    if (city) {
      fetch(weatherUrl + city)
          .then(res => res.json())
          .then(text => {
            if (text.infocode === '10000' && text.count === '1') {
              setRes(text.forecasts[0])
            } else {
              setRes('Not Found')
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
            {res.casts.map(i =>
              <li key={i.date}>{i.date}
                <ul>
                  <li>{i.dayweather} ~ {i.nightweather}</li>
                  <li>{i.nighttemp} ~ {i.daytemp}</li>
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