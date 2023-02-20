# React Redux Demo

## Folder

```
|-- src
|    |-- redux
|         |-- demo
|              |-- counter.js
|              |-- header.js
|         |-- reducer
|              |-- counter.js
|              |-- header.js
|              |-- index.js
|         |-- actions.js
|         |-- index.js
|    |-- App.js
|    |-- index.js
```

## Codes

### src/index.js

```js
import React from 'react';
import { render } from "react-dom"
import { Provider } from 'react-redux'
import store from './redux'
import App from './App'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```

### src/App.js

```js
import React from 'react'

import Counter from './redux/demo/counter'
import Header from './redux/demo/header'

function App() {
  return (
    <>
      <Counter />
      <Header />
    </>
  )
}

export default App
```

### src/redux/index.js

```js
import { createStore } from 'redux'
import reducer from './reducers'
// The store holds the data
const store = createStore(reducer)

export default store
```

### src/redux/actions.js

```js
// The action creators
export const increment = () => ({ type: "INC" });
export const decrement = () => ({ type: "DEC" });
export const reset = () => ({ type: "RESET" });

export const update = title => ({
  type: 'UPDATE',
  title,
})
```

### src/redux/reducer/index.js

```js
import { combineReducers } from "redux";
import counter from "./counter";
import header from "./header";

export default combineReducers({ counter, header });
```

### src/redux/reducer/counter.js

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

### src/redux/reducer/header.js

```js
// The reducer updates the count
const initialState = {
  title: 'Home'
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE":
      const { title } = action
      return { ...state, title }
    default:
      return state;
  }
}

export default reducer
```

### src/redux/demo/counter.js

```js
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
```

### src/redux/demo/header.js

```js
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
```