import React from 'react'
import Counter from 'src/redux/demo/counter'
import Header from 'src/redux/demo/header'
import PageHeader from 'src/components/pageHeader'

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