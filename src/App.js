import React, { Component } from 'react'
import './App.css'

import marked from 'marked'

import { defaultText } from './defaultText'
import { Pane,Textarea,Text } from 'evergreen-ui'

class App extends Component {
  state = {
    text: defaultText
  }

  componentDidMount () {
    const text = localStorage.getItem('text')

    if (text) {
      this.setState({ text })
    } else {
      this.setState({ text: defaultText })
    }
  }

  componentDidUpdate () {
    const { text } = this.state
    localStorage.setItem('text', text)
  }

  handleChange = event => {
    const text = event.target.value
    this.setState({ text })
  }

  renderText = text => {
    const __html = marked(text, { sanitize: true })
    return { __html }
  }

  render () {
    return (
      <>
        <Text 
        size={500} 
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginTop={30}
          > Welcome To my IDE MARKDOWN 	&#169; Ibrahima DANSOKO</Text>
      <Pane
      display='flex'
      justifyContent='center'
      >
        <Pane>

  <Textarea
    id="textarea-2"
     onChange = {
       this.handleChange
     }
     height={600}
     width={500}
     margin={20}
     value = {
       this.state.text
     }
    placeholder="Write your text..."
  />
</Pane>
<Pane>
            <Text size={600} dangerouslySetInnerHTML = {this.renderText(this.state.text)} />
</Pane>
</Pane>
      </>
    )
  }
}

export default App