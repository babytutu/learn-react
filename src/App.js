import React from 'react';
import { Link } from "@reach/router"

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Home</h1>
        <Link to="Learn">Learn</Link>
      </>
    )
  }
}

export default App;
