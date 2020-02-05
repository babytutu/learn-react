import React from "react";
import { useHistory } from 'react-router-dom'
import style from './style.module.css'

function BackToTop() {
  const history = useHistory()
  function handleClick () {
    history.push('/')
  }
  return (
    <span className={style.backBtn} onClick={handleClick}>back</span>
  )
}

export default BackToTop