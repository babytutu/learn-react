import React from 'react';
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

function code ({ node, inline, className, children, ...props }) {
  const match = /language-(\w+)/.exec(className || '')
  return !inline && match ? (
    <SyntaxHighlighter style={tomorrow} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
  ) : (
    <code className={className} {...props} />
  )
}

function RenderMarkdown ({ markdown }) {
  return (
    <ReactMarkdown children={markdown}
      components={{
        code
      }} />
  )
}

export default RenderMarkdown