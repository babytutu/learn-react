import React from 'react'
import {
  useLocation,
  Link
} from 'react-router-dom'

function NoMath () {
  let location = useLocation()

  return (
    <>
      <h3>No match for <code>{location.pathname}</code></h3>
      <Link to="/">Home</Link>
    </>
  );
}

export default NoMath