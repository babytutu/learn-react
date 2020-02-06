import React from 'react'
import {
  useLocation,
} from 'react-router-dom'

function NoMath () {
  let location = useLocation()

  return (
    <p>No match for <code>{location.pathname}</code></p>
  )
}

export default NoMath