import React from 'react';
import { Link } from 'react-router-dom'

import { Menu } from './menu'

function Home () {
  return (
    <ul>
      {Menu.map((item =>
        <li key={item}><Link to={item}>{item}</Link></li>
      ))}
    </ul>
  )
}

export default Home;
