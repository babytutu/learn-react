import React from 'react';
import Markdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { DataList } from './data'

class Type extends React.Component {
  state = {
    markdown: ''
  }

  getData(type) {
    if (DataList[type]) {
      fetch(DataList[type]['md'])
        .then(res => res.text())
        .then(text => this.setState({ markdown: text }));
    }
  }

  componentDidMount() {
    let { type } = this.props.match.params
    this.getData(type)
  }

  componentDidUpdate({ match }) {
    const type = this.props.match.params.type
    if (match.params.type !== type) {
      this.getData(type)
    }
  }

  render() {
    return (
      <SyntaxHighlighter language="html">
        <Markdown source={this.state.markdown} />
      </SyntaxHighlighter>
    );
  }
}

export default Type