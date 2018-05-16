import React, { Component } from 'react'
import Intro from './components/intro.js'
import introText from './intro-text.txt'

class App extends Component {
  state = {
    introIsPlaying: true,
    introText: 'loading'
  }

  constructor() {
    super()
    fetch(introText)
      .then(r => r.text())
      .then(introTextValue => this.setState({ introText: introTextValue }))

    setTimeout(() => this.setState({ introIsPlaying: false }), 10000)
  }

  render() {
    if (this.state.introIsPlaying) return <Intro text={this.state.introText} />
    return (
      <div style={{ color: '#BADA55' }}>
        I am big boy
      </div>
    );
  }
}

export default App;
