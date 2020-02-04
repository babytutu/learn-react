# React

## Installation

- [create-a-new-react-app](https://zh-hans.reactjs.org/docs/create-a-new-react-app.html)
- [Create React App](https://create-react-app.dev/)

```bash
npx create-react-app my-app
cd my-app
npm start
```

## JSX

### public/index.html

```html
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>react</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

### src/index.js

```js
import React from 'react'
import ReactDOM from "react-dom"

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```

## Components & Props

### src/index.js

```js
import React from 'react'
import ReactDOM from 'react-dom'

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

ReactDOM.render(
  <Welcome name="TUTU" />,
  document.getElementById('root')
)
```

## State and Lifecycle

### src/index.js

```js
import React from 'react'
import ReactDOM from "react-dom"

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: ''
    }
  }

  getDate = () => {
    let date = new Date().toLocaleString()
    this.setState({
      date
    })
  }

  componentDidMount () {
    this.getDate()
  }

  render() {
    return (
      <>
        <h2>{this.state.date}</h2>
        <button onClick={this.getDate}>update</button>
      </>
    )
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
)
```

## Handling Events

### src/index.js

```js
import React from 'react'
import ReactDOM from "react-dom"

class Handler extends React.Component {
  handleClick = (id, e) => {
    e.preventDefault()
    console.log('Clicked', id)
  }

  render() {
    return (
      <a href="#" onClick={(e) => this.handleClick(1, e)}>Click</a>
    )
  }
}

ReactDOM.render(
  <Handler />,
  document.getElementById('root')
)
```

## Conditional Rendering

### src/index.js

```js
import React from 'react'
import ReactDOM from "react-dom"

class Condition extends React.Component {
  state = {
    isSayHello: true
  }

  toggleSay = () => {
    this.setState({
      isSayHello: !this.state.isSayHello
    })
  }

  render() {
    return (
      <>
        <button onClick={this.toggleSay}>toggle</button>
        {
          this.state.isSayHello &&
          <h1>Hello, world!</h1>
        }
      </>
    )
  }
}

ReactDOM.render(
  <Condition />,
  document.getElementById('root')
)
```

## Lists and Keys

### src/index.js

```js
import React from 'react'
import ReactDOM from "react-dom"

class Lists extends React.Component {
  state = {
    list: [1, 2, 3]
  }
  render() {
    return (
      <ul>
      {
        this.state.list.map((i) =>
          <li key={i}>No.{i}</li>
        )
      }
      </ul>
    )
  }
}

ReactDOM.render(
  <Lists />,
  document.getElementById('root')
)
```

## Forms

### src/index.js

```js
import React from 'react'
import ReactDOM from "react-dom"

class Forms extends React.Component {
  state = {
    input: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    alert('A value was submitted: ' + this.state.input)
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  reset = () => {
    this.setState({
      input: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.input} onChange={this.handleChange} />
        <input type="submit" value="submit" />
        <input type="reset" onClick={this.reset} value="reset" />
      </form>
    )
  }
}

ReactDOM.render(
  <Forms />,
  document.getElementById('root')
)
```

## Refs and the DOM

> React.createRef()

### src/index.js

```js
import React from 'react'
import ReactDOM from "react-dom"

class Ref extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  componentDidMount() {
    alert(this.myRef.current.innerHTML)
  }

  render() {
    return (
      <div ref={this.myRef}>hello</div>
    )
  }
}

ReactDOM.render(
  <Ref />,
  document.getElementById('root')
)
```

## React.Component

### The Component Lifecycle

#### Mounting

- *constructor()*

```js
constructor(props) {
  super(props)
  this.state = {
    name: 'ABC'
  }
}
```

- static getDerivedStateFromProps()
- *render()*

```js
render() {
  return (
    <h1>Title</h1>
  )
}
```

- *componentDidMount()*

#### Updating

- static getDerivedStateFromProps()
- shouldComponentUpdate()

```js
/**
 * @return {boolean} shouldComponentUpdate
 * if shouldComponentUpdate() returns false, render(), and componentDidUpdate() will not be invoked.
 */
shouldComponentUpdate(nextProps, nextState) {
  return this.props.name !== nextProps.name
}
```

- *render()*

> render() will not be invoked if shouldComponentUpdate() returns false.

- getSnapshotBeforeUpdate()

```js
/**
 * Any value returned by this lifecycle will be passed as a parameter to componentDidUpdate()
 */
getSnapshotBeforeUpdate(prevProps, prevState) {
  return prevProp.name !== this.props.name
}

componentDidUpdate(prevProps, prevState, snapshot) {
  // (snapshot here is the value returned from getSnapshotBeforeUpdate)
  if (!snapshot) {
    console.log('Name changed')
  }
}
```

- *componentDidUpdate()*

```js
/**
 * componentDidUpdate() will not be invoked if shouldComponentUpdate() returns false.
 */
componentDidUpdate(prevProps, prevState, snapshot) {
  if (this.props.name !== prevProps.name) {
    console.log('Name changed')
  }
}

```

#### Unmounting

- *componentWillUnmount()*

> should not call setState() in componentWillUnmount()

#### Error Handling

- static getDerivedStateFromError()
- componentDidCatch()

### Other APIs

- setState()

```js
setState(updater[, callback])
```

(state, props) => stateChange

```js
this.setState((state, props) => {
  return {counter: state.counter + props.step};
})
```

setState(stateChange[, callback])

```js
this.setState({quantity: 2})
```

- forceUpdate()

### Class Properties

- defaultProps

```js
class Test extends React.Component {
  // If props.name is not provided, it will be set by default to 'ABC':
  Test.defaultProps = {
    name: 'ABC'
  }
}
```

```js
render() {
  return <Test /> ; // props.name will be set to ABC
}
```

```js
render() {
  return <Test name="abc" /> ; // props.name will be set to abc
}
```

- displayName

### Instance Properties

- props
- state

## DOM Elements

### Differences In Attributes

- checked

> The checked attribute is supported by *<input>* components of type checkbox or radio

- className

> To specify a CSS class, use the className attribute.

- dangerouslySetInnerHTML

> dangerouslySetInnerHTML is React’s replacement for using innerHTML in the browser DOM.

```jsx
function RenderHtml() {
  const HTML = {
    __html: 'First &middot; Second'
  }

  return <div dangerouslySetInnerHTML={HTML}></div>
}

ReactDOM.render(
  <RenderHtml />,
  document.getElementById('root')
)
```

- htmlFor

> Since for is a reserved word in JavaScript, React elements use htmlFor instead.

- onChange

> whenever a form field is changed, this event is fired

- selected

> The selected attribute is supported by *<option>* components

- style

> *using the style attribute as the primary means of styling elements is generally not recommended*

```jsx
<div style={{ height: 10 }}>
  Hello World!
</div>
```

- value

> The value attribute is supported by *<input>* and *<textarea>* components

## HOOKS

> Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

### Using the State Hook

```jsx
function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

ReactDOM.render(
  <Example />,
  document.getElementById('root')
)
```

### Using the Effect Hook

```jsx
import React from 'React'

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = React.useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  React.useEffect(() => {
    console.log('count:', count)
  }, [count]) // only count changed will run

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

ReactDOM.render(
  <Example />,
  document.getElementById('root')
)
```

## Rules of Hooks

- Only Call Hooks at the Top Level
- Only Call Hooks from React Functions
