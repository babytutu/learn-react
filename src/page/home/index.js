import React from 'react';
import { Link } from 'react-router-dom'

import PageHeader from '../../components/pageHeader'

import { Menu } from './menu'

function Home (props) {
  return (
    <>
      <header>
        <PageHeader {...props} />
      </header>
      <ul>
        {Menu.map((item =>
          <li key={item.path}><Link to={item.path}>{item.name}</Link></li>
        ))}
      </ul>
    </>
  )
}

export default Home;
