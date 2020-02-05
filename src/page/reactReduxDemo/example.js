import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement, reset, update } from 'store/actions'

function Counter({ count, title, state, increment, decrement, reset, update }) {
  return (
    <div>
      <h3>Counter</h3>
      <div>
        <p>count: {count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>reset</button>
      </div>
      <h3>Title</h3>
      <div>
        <p>title: {title}</p>
        <button onClick={() => update('Hello World!')}>Set title to 'Hello World!'</button>
        <button onClick={() => update('Home')}>reset title</button>
      </div>
      <h3>State</h3>
      <pre>{state}</pre>
    </div>
  );
}

const mapStateToProps = state => ({
  count: state.counter.count,
  title: state.header.title,
  state: JSON.stringify(state),
})

const mapDispatchToProps = {
  decrement,
  increment,
  reset,
  update,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
