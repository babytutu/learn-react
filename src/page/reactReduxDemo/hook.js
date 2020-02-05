import React from 'react'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'

const Hook = () => {
  const count = useSelector(state => state.counter.count, shallowEqual)
  const title = useSelector(state => state.header.title, shallowEqual)
  const state = useSelector(state => JSON.stringify(state), shallowEqual)
  const dispatch = useDispatch()

  return (
    <div>
      <h3>Counter</h3>
      <div>
        <p>count: {count}</p>
        <button onClick={() => dispatch({ type: 'INC'})}>+</button>
        <button onClick={() => dispatch({ type: 'DEC'})}>-</button>
        <button onClick={() => dispatch({ type: 'RESET'})}>reset</button>
      </div>
      <h3>Header</h3>
      <div>
        <p>title: {title}</p>
        <button onClick={() => dispatch({
          type: 'UPDATE',
          title: 'Hello World!'})}>Set title to 'Hello World!'</button>
        <button onClick={() => dispatch({
          type: 'UPDATE',
          title: 'Home'})}>reset title</button>
      </div>
      <h3>State</h3>
      <pre>{state}</pre>
    </div>
  )
}

export default Hook