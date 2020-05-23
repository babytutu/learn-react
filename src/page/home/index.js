import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import PageHeader from 'components/pageHeader'

function Home (props) {
  const [res, setRes] = useState([])
  const [load, setLoad] = useState(true)
  useEffect(() => {
    if (load) {
      fetch('data/menu.json')
          .then(res => res.json())
          .then(text => {
            setRes(text)
            setLoad(false)
          })
    }
  }, [load])
  return (
    <>
      <PageHeader {...props} />
      {res.map(i =>
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
