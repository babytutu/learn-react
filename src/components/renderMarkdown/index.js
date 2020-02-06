import React from 'react';
import Markdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

function code ({ language, value }) {
  return (
    <SyntaxHighlighter language={language} style={tomorrow}>
      {value}
    </SyntaxHighlighter>
  )
}

function RenderMarkdown ({ markdown }) {
  return (
    <Markdown source={markdown}
      renderers={{
        code
      }} />
  )
}

export default RenderMarkdown