import React, { useState, useEffect } from 'react'
import { apiList } from 'data/list'
import PageHeader from 'components/pageHeader'

function Apis (props) {
  const [res, setRes] = useState({})
  const [api, setApi] = useState('')
  const [load, setLoad] = useState(true)
  useEffect(() => {
    setLoad(true)
    if (api) {
      fetch(api)
          .then(res => res.json())
          .then(text => {
            setRes(text.info)
            setLoad(false)
          })
    }
  }, [api])
  return (
    <div>
      <PageHeader {...props} />
      <a href="https://apis.guru/api-doc/" rel="noopener noreferrer" target="_blank">APIs.guru</a>
      <ul>
        {apiList.map(i =>
          <li key={i} className={i === api ? 'active' : ''}>
            <span onClick={() => setApi(i)}>{i.replace('https://api.apis.guru/v2/specs/amazonaws.com/', '').replace('/swagger.json', '')}</span>
          </li>
        )}
      </ul>
      {api && load && <p>loading</p>}
      {!load &&
        <>
          <h2>Info</h2>
          <h3>{res.title} [{res.version}]</h3>
          <ul>
            {Object.keys(res.contact).map(i =>
              <li key={i}>{i} - {res.contact[i]}</li>
            )}
          </ul>
        </>
      }
    </div>
  )
}

export default Apis