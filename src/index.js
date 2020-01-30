import React from 'react';
import { render } from "react-dom"
import { Router } from "@reach/router"

import './index.css'
import App from './App';
import Learn from './page/learn/index'
import Type from './page/learn/type'

import * as serviceWorker from './serviceWorker';

const NotFound = () => (
  <div>Sorry, nothing here.</div>
)

const LearnIndex = () => (
  <div>Something to Learn.</div>
)

render((
  <Router>
    <App path="/" />
    <Learn path="Learn">
      <LearnIndex path="/" />
      <Type path=":type" />
    </Learn>
    <NotFound default />
  </Router>
), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
