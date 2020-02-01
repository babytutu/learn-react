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