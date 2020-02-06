import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement, reset } from 'redux/actions'

function Counter({ count, state, increment, decrement, reset }) {
  return (
    <div>
      <h3>Counter</h3>
      <p>count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
      <p>{state}</p>
    </div>
  );
}

const mapStateToProps = state => ({
  count: state.counter.count,
  state: JSON.stringify(state),
})

const mapDispatchToProps = {
  decrement,
  increment,
  reset,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)