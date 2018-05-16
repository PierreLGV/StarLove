import React, { Component } from 'react'
import Intro from './components/intro.js'
import introText from './intro-text.txt'
import Cockpit from './components/cockpit.js';

class App extends Component {
  state = {
    introIsPlaying: true,
    introText: 'loading',
    characters: 'loading'
  }

  constructor() {
    super()
    fetch(introText)
      .then(r => r.text())
      .then(introTextValue => this.setState({ introText: introTextValue }))

    setTimeout(() => this.setState({ introIsPlaying: false }), 2000)

    /// fetch 2 try

    fetch('https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json')
      .then(res => res.json())
      .then(resJson => {
        console.log(resJson)
        return resJson
      })
      .catch((error) => {
        console.error(error);
      })

    /// end
  }

  render() {
    if (this.state.introIsPlaying) return <Intro text={this.state.introText} />
    return (
      <div style={{ color: '#BADA55' }}>
       <Cockpit/>     
      </div>
    );
  }
}

export default App;
