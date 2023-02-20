# React Redux

React Redux is the official React binding for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update data.

[React Redux](https://react-redux.js.org/)

## Introduction

### Quick Start

#### Installation

React Redux 7.1 requires React 16.8.3 or later.

```bash
npm install react-redux
```

You'll also need to install Redux and set up a Redux store in your app.

#### Provider

React Redux provides <Provider />, which makes the Redux store available to the rest of your app:

```js
import React from 'react'
import { createRoot } from 'react-dom/client'

import { Provider } from 'react-redux'
import store from './store'

import App from './App'

const root = createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <Router />
  </Provider>
)
```

#### connect()

React Redux provides a connect function for you to connect your component to the store.

```js
import { connect } from 'react-redux'
import { increment, decrement, reset } from './actionCreators'

// const Counter = ...

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = { increment, decrement, reset }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
```

## Using React Redux

### Connect: Extracting Data with mapStateToProps

```js
/**
 * @param {object} state Redux store state
 *  (the same value returned by a call to store.getState())
 * @param {object} ownProps optional
 * @return {object} the data the component needs
 */
function mapStateToProps(state, ownProps) {
  return {
    a: 1,
    todo: state.todo,
    ...ownProps,
  }
}
```

### Connect: Dispatching Actions with mapDispatchToProps

Two Forms of mapDispatchToProps

- Function form
- Object shorthand form ***recommend***

#### Defining mapDispatchToProps As An Object

actions.js
```js
// The action creators
export const increment = () => ({ type: "INC" });
export const decrement = () => ({ type: "DEC" });
export const reset = () => ({ type: "RESET" });
```

counter.js

```js
import {increment, decrement, reset} from "./actions.js";

function Counter({ count, increment, decrement, reset }) {
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

const mapStateToProps = state => ({
  count: state.count,
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
```

store.js

```js
import { createStore } from 'redux'
import reducer from './reducer'
// The store holds the data
const store = createStore(reducer)

export default store
```

reducer.js

```js
// The reducer updates the count
const initialState = {
  count: 0
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "INC":
      return { ...state, count: state.count + 1 };
    case "DEC":
      return { ...state, count: state.count - 1 };
    case "RESET":
      return { ...state, count: 0 };
    default:
      return state;
  }
}

export default reducer
```

## API Reference

### connect()

#### connect() Parameters

- mapStateToProps?: Function
  - mapStateToProps?: (state, ownProps?) => Object

- mapDispatchToProps?: Function | Object
  - mapDispatchToProps?: Object | (dispatch, ownProps?) => Object

```js
// do not pass `mapDispatchToProps`
connect()(MyComponent)
connect(mapState)(MyComponent)
connect(
  mapState,
  null,
  mergeProps,
  options
)(MyComponent)
```

- mergeProps?: Function
  - mergeProps?: (stateProps, dispatchProps, ownProps) => Object

- options?: Object

```js
{
  context?: Object,
  pure?: boolean,
  areStatesEqual?: Function,
  areOwnPropsEqual?: Function,
  areStatePropsEqual?: Function,
  areMergedPropsEqual?: Function,
  forwardRef?: boolean,
}
```

#### connect() Returns

The return of connect() is a wrapper function that takes your component and returns a wrapper component with the additional props it injects.

```js
import { login, logout } from './actionCreators'

const mapState = state => state.user
const mapDispatch = { login, logout }

// call connect to generate the wrapper function, and immediately call
// the wrapper function to generate the final wrapper component.

export default connect(
  mapState,
  mapDispatch
)(Login)
```

### Provider

#### Props

- store
- children
- context

#### Example Usage

- Vanilla React Example

```js
import React from 'react';
import { render } from "react-dom"
import { Provider } from 'react-redux'
import store from './store'
import App from './app'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```

- Usage with React Router

```js
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router-dom'

import { App } from './App'
import { Foo } from './Foo'
import { Bar } from './Bar'

import store from './store'

const root = createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={App} />
      <Route path="/foo" component={Foo} />
      <Route path="/bar" component={Bar} />
    </Router>
  </Provider>
)
```

## Hooks

### Using Hooks in a React Redux App

```js
const store = createStore(rootReducer)

const root = createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
```

### useSelector()

```js
const result : any = useSelector(selector : Function, equalityFn? : Function)
```

Allows you to extract data from the Redux store state, using a selector function.

#### Equality Comparisons and Updates

```js
import { shallowEqual, useSelector } from 'react-redux'

// later
const selectedData = useSelector(selectorReturningObject, shallowEqual)
```

#### useSelector Examples

- Basic usage:

```js
import React from 'react'
import { useSelector } from 'react-redux'

export const CounterComponent = () => {
  const counter = useSelector(state => state.counter)
  return <div>{counter}</div>
}
```

- Using props via closure to determine what to extract:

```js
import React from 'react'
import { useSelector } from 'react-redux'

export const TodoListItem = props => {
  const todo = useSelector(state => state.todos[props.id])
  return <div>{todo.text}</div>
}
```

### useDispatch()

```js
const dispatch = useDispatch()
```

#### Examples

```js
import React from 'react'
import { useDispatch } from 'react-redux'

export const CounterComponent = ({ value }) => {
  const dispatch = useDispatch()

  return (
    <div>
      <span>{value}</span>
      <button onClick={() => dispatch({ type: 'increment-counter' })}>
        Increment counter
      </button>
    </div>
  )
}
```

When passing a callback using dispatch to a child component, it is recommended to memoize it with useCallback

```js
import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'

export const CounterComponent = ({ value }) => {
  const dispatch = useDispatch()
  const incrementCounter = useCallback(
    () => dispatch({ type: 'increment-counter' }),
    [dispatch]
  )

  return (
    <div>
      <span>{value}</span>
      <MyIncrementButton onIncrement={incrementCounter} />
    </div>
  )
}

export const MyIncrementButton = React.memo(({ onIncrement }) => (
  <button onClick={onIncrement}>Increment counter</button>
))
```

## Demo

[![Edit React Redux Demo Use Hooks](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-redux-demo-use-hooks-jwysj?fontsize=14&theme=dark)