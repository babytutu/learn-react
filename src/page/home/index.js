import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

import PageHeader from 'components/pageHeader'
import { menuList, weatherUrl } from 'data/list'

function Home (props) {
  const [weather, setWeather] = useState('')

  useEffect(() => {
    if (!weather) {
      fetch(weatherUrl('杭州', 'base'))
        .then(res => res.json())
        .then(text => setWeather(text.lives[0]))
    }
  })
  return (
    <>
      <PageHeader {...props} />
      {weather &&
        <>
          <h2>Weather</h2>
          <ul>
            <li>{weather.city}</li>
            <li>{weather.weather} {weather.temperature}℃</li>
            <li>{weather.reporttime}</li>
          </ul>
        </>
      }
      {menuList.map(i =>
        <div key={i.title}>
          <h3>{i.title}</h3>
          {i.children &&
            <ul>
              {i.children.map(item =>
                <li key={item.id}>
                  <Link to={i.path + item.id}>{item.title}</Link>
                </li>
              )}
            </ul>
          }
        </div>
      )}
    </>
  )
}

export default Home
