import React from "react";
import { useHistory } from 'react-router-dom'
import './back.css'

function BackToTop() {
  const history = useHistory()
  function handleClick () {
    history.push('/')
  }
  return (
    <span className="backBtn" onClick={handleClick}>back</span>
  )
}

export default BackToTop