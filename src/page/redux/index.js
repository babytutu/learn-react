import React from 'react'
import Counter from 'redux/demo/counter'
import Header from 'redux/demo/header'
import PageHeader from 'components/pageHeader'

function Demo(props) {
  return (
    <>
      <PageHeader {...props} />
      <Counter />
      <Header />
    </>
  )
}

export default Demo