import React from 'react'
import styles from './pageHeader.module.css'

function PageHeader ({ meta }) {
  if (meta && meta.title) {
    return <h1 className={styles.header}>{meta.title}</h1>
  } else {
    return null
  }
}

export default PageHeader