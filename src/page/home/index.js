import React from 'react';
import { Link } from 'react-router-dom'

import { Menu } from './menu'

function Home () {
  return (
    <>
      <header>
        <h1>Learn React</h1>
      </header>
      {Menu.map((item =>
      <h3 className="link" key={item}><Link to={item}>{item}</Link></h3>
      ))}
    </>
  )
}

export default Home;
