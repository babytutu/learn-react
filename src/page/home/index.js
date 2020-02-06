import React from 'react';
import { Link } from 'react-router-dom'

import { menuList } from 'data/list'

function Home () {
  return (
    <>
      {menuList.map(i =>
        <div key={i.title}>
          <h2>{i.title}</h2>
          <ul>
            {i.children.map(item =>
              <li key={item.id}>
                <Link to={i.path + item.id}>{item.title}</Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </>
  )
}

export default Home
