import React from 'react'

import BackToTop from 'components/backToTop'
import PageHeader from 'components/pageHeader'

function Demo(props) {
  const style = () => {
    return {
      width: '100%',
      height: '800px'
    }
  }

  return (
    <div>
      <header>
        <PageHeader {...props} />
        <BackToTop />
      </header>
      <iframe
        src="https://codesandbox.io/embed/react-redux-demo-use-hooks-jwysj?fontsize=14&theme=dark"
        style={style()} frameBorder="no"
        title="React Redux Demo Use Hooks"
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      ></iframe>
    </div>
  );
}

export default Demo