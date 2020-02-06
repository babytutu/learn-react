import React from 'react'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'

const Header = () => {
  const title = useSelector(state => state.header.title, shallowEqual)
  const state = useSelector(state => JSON.stringify(state), shallowEqual)
  const dispatch = useDispatch()

  return (
    <div>
      <h3>Header <small>use hook</small></h3>
      <p>title: {title}</p>
      <button onClick={() => dispatch({
        type: 'UPDATE',
        title: 'Hello World!'})}>Set title to 'Hello World!'</button>
      <button onClick={() => dispatch({
        type: 'UPDATE',
        title: 'Home'})}>reset title</button>
      <p>{state}</p>
    </div>
  )
}

export default Header