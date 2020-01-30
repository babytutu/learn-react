import React from 'react';
import Markdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { DataList } from './data'

class Type extends React.Component {
  state = {
    markdown: ''
  }

  getData () {
    fetch(DataList[this.props.type]['md'])
      .then(res => res.text())
      .then(text => this.setState({ markdown: text }));
  }

  componentDidMount() {
    this.getData()
  }

  componentDidUpdate({ type }) {
    if (type !== this.props.type) {
      this.getData()
    }
  }

  render () {
    return (
      <SyntaxHighlighter language="html">
        <Markdown source={this.state.markdown} />
      </SyntaxHighlighter>
    );
  }
}

export default Type