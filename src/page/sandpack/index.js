// eslint-disable-next-line
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
} from "@codesandbox/sandpack-react";

import React from 'react'
import PageHeader from 'src/components/pageHeader'

function Page(props) {
  return (
    <>
      <PageHeader {...props} />
      <SandpackProvider template="vue">
        <SandpackLayout>
          <SandpackCodeEditor />
          <SandpackPreview />
        </SandpackLayout>
      </SandpackProvider>
    </>
  )
}

export default Page
