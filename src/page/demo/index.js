import React from 'react'
import {
  Link
} from 'react-router-dom'
import { list } from './list'

class CodePen extends React.Component {
  state = {
    iframe: '',
    id: ''
  }

  componentDidMount () {
    this.setUrl(list[0].id)
  }

  setUrl = (id) => {
    this.setState({
      iframe: '',
      id: ''
    })
    const iframe = `https://codepen.io/babytutu/embed/${id}?height=265&default-tab=js,result`
    this.setState({
      iframe,
      id
    })
  }

  render () {
    return (
      <>
        <h1>CodePen Demo</h1>
        <ul>
          {list.map(item =>
            <li className={item.id === this.state.id ? 'active' : ''} key={item.title} onClick={() => this.setUrl(item.id)}>{item.title}</li>
          )}
        </ul>
        <iframe height="265" style={{width: "100%"}} scrolling="no" title="React:JSX" src={this.state.iframe} frameBorder="no" />
        <Link to="/">Home</Link>
      </>
    )
  }
}

export default CodePen