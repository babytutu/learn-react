import React from 'react'
import {
  useLocation,
} from 'react-router-dom'

import PageHeader from '../../components/pageHeader'
import BackToTop from '../../components/backToTop'

function NoMath (props) {
  let location = useLocation()

  return (
    <>
      <header>
        <PageHeader {...props} />
        <BackToTop />
      </header>
      <h3>No match for <code>{location.pathname}</code></h3>
    </>
  );
}

export default NoMath