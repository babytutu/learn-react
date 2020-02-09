import React from 'react';
import { Link } from 'react-router-dom'

import PageHeader from 'components/pageHeader'
import { menuList } from 'data/list'

function Home (props) {
  return (
    <>
      <PageHeader {...props} />
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
