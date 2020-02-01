import React from 'react';
import { Link } from 'react-router-dom'
import { Menu } from './menu'

class Home extends React.Component {
  render() {
    return (
      <>
        <h1>Home</h1>
        <ul>
          {Menu.map(item =>
            <li key={item}><Link to={item}>{item}</Link></li>
          )}
        </ul>
      </>
    )
  }
}

export default Home;
