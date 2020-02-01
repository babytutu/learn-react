import React from 'react';
import Markdown from 'react-markdown'
import codeBlock from './codeBlock'
class Type extends React.Component {
  state = {
    markdown: '',
  }

  getData(type) {
    const mdFolder = process.env.PUBLIC_URL + '/markdown/'
    fetch(mdFolder + type + '.md')
      .then(res => res.text())
      .then(text => this.setState({ markdown: text }))
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
      <Markdown source={this.state.markdown}
        renderers={{
          code: codeBlock
        }} />
    )
  }
}

export default Type