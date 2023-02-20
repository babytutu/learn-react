# React Router

[The Future of React Router and @reach/router](https://reacttraining.com/blog/reach-react-router-future/)

## Installation

[quick-start](https://reacttraining.com/react-router/web/guides/quick-start)

```bash
npm install react-router-dom
```

## GUIDES

### Basic Routing

```js
import React from "react";
import { render } from "react-dom"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App () {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/frist">Frist</Link></li>
          <li><Link to="/second">Second</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route path="/frist">
          <Frist />
        </Route>
        <Route path="/second">
          <Second />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

function Frist() {
  return <h2>Frist</h2>
}
function Second() {
  return <h2>Second</h2>
}
function Home() {
  return <h2>Home</h2>
}

render((
  <App />
), document.getElementById('root'))
```

### Nested Routing

```js
import React from "react";
import { render } from "react-dom"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function App () {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/frist">Frist</Link></li>
          <li><Link to="/second">Second</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route path="/frist">
          <Frist />
        </Route>
        <Route path="/second">
          <Second />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

function Frist() {
  let match = useRouteMatch()
  return (
    <>
      <h2>Frist</h2>
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/:id`}>
          <Child />
        </Route>
        <Route path={match.path}>
          <h3>Please select a child.</h3>
        </Route>
      </Switch>
    </>
  )
}

function Child() {
  let { id } = useParams();
  return <h3>Requested ID: {id}</h3>;
}

function Second() {
  return <h2>Second</h2>
}
function Home() {
  return <h2>Home</h2>
}

render((
  <App />
), document.getElementById('root'))
```

## API

### Hooks

#### useHistory

> The useHistory hook gives you access to the history instance that you may use to navigate.

```js
import React from "react";
import { useHistory } from 'react-router-dom'

function Bcak() {
  const history = useHistory()
  function handleClick () {
    history.push('/')
  }
  return (
    <button onClick={handleClick}>back</button>
  )
}
```

#### useLocation

> The useLocation hook returns the location object that represents the current URL

```js
import React from "react";
import { useLocation } from 'react-router-dom'

function getLocation () {
  let location = useLocation()
  React.useEffect(() => {
    ga.send(["pageview", location.pathname]);
  }, [location])
}
```

#### useParams

> useParams returns an object of key/value pairs of URL parameters

```js
import React from "react";
import { createRoot } from 'react-dom/client'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

function getParams () {
  let { id } = useParams()
  return <div>id: {id}</div>
}

const root = createRoot(document.getElementById('root'))

root.render(
  <Router>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/blog/:id">
        <BlogPost />
      </Route>
    </Switch>
  </Router>,
)
```

#### useRouteMatch

> The useRouteMatch hook attempts to match the current URL in the same way that a <Route> would

```js
import React from "react";
import { useRouteMatch } from "react-router-dom";

function BlogPost() {
  let match = useRouteMatch("/blog/:slug");

  // Do whatever you want with the match...
  return <div />;
}
```

### <BrowserRouter>

- basename: string
  - The base URL for all locations
- getUserConfirmation: func
  - A function to use to confirm navigation
- forceRefresh: bool
  - If true the router will use full page refreshes on page navigation
- keyLength: number
  - The length of location.key. Defaults to 6.
- children: node
  - The child elements to render.

### <HashRouter>
- basename: string
  - The base URL for all locations
- getUserConfirmation: func
  - A function to use to confirm navigation
- hashType: string
  - The type of encoding to use for window.location.hash
    - "slash" - Creates hashes like #/ and #/sunshine/lollipops(default)
    - "noslash" - Creates hashes like # and #sunshine/lollipops
    - "hashbang" - Creates “ajax crawlable” (deprecated by Google) hashes like #!/ and #!/sunshine/lollipops
- children: node
  - The child elements to render.

### <Link>

- to: string
- to: object
- to: function
- replace: bool

## <NavLink>

- activeClassName: string
- activeStyle: object
- exact: bool
- strict: bool
- isActive: func

## <Redirect>

- to: string
- to: object
- to: function
- push: bool
- from: string
- exact: bool
- strict: bool

## Route

### Route render methods

- <Route component>
- <Route render>
- <Route children> function

### Route props

- match
- location
- history

## match

- params - (object) Key/value pairs parsed from the URL corresponding to the dynamic segments of the path
- isExact - (boolean) true if the entire URL was matched (no trailing characters)
- path - (string) The path pattern used to match. Useful for building nested <Route>s
- url - (string) The matched portion of the URL. Useful for building nested <Link>s