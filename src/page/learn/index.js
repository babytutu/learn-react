import React from 'react';
import { Link, navigate } from "@reach/router"
import { DataList } from './data'
import './index.css'

class Learn extends React.Component {
  state = {
    nav: '',
  }
  componentDidMount () {
    this.setState({
      nav: this.props['*']
    })
  }

  /**
   * 切换菜单后跳转到对应子页面
   * @param {object} data 参数对象
   */
  handleChange = (data) => {
    navigate(this.props.uri + '/' + DataList[data]['type'])
    this.setState({
      nav: DataList[data]['type']
    })
  }

  isActive = (data) => {
    return this.state.nav === DataList[data]['type'] ? 'active' : null
  }

  render () {
    return (
      <>
        <h2>{this.props.path}</h2>
        <ul>
          {Object.keys(DataList).map(data =>
            <li key={data} className={this.isActive(data)}>
              <span onClick={() => this.handleChange(data)} >{DataList[data]['type']}</span>
            </li>
          )}
        </ul>
        {this.props.children}
        <Link to="/">Home</Link>
      </>
    )
  }

}

export default Learn;
