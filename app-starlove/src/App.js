import React, { Component } from 'react'
import Intro from './components/intro.js'
import introText from './intro-text.txt'
import Cockpit from './components/cockpit.js';
import HandleQuestion from './components/questions.js';


class App extends Component {
  state = {
    introIsPlaying: true,
    introText: 'loading',
    characters: 'loading',
    questions: [
      {
        text: `T'aimes les poils ?`,
        yes: `yeahh`,
        no:`beurk`,
        ifyes: 'human',
        ifno: 'droid'
      },
      {
        text: `T'es un petit vilain ?`,
        yes: `Un chouillat...`,
        no:`Non, je suis pur`
      },
      {
        text: `Tu veux du solide ?`,
        yes: `Je préfère, merci`,
        no:`J'aime les petits joueurs`
      }
    ]
  }

  constructor() {
    super()
    fetch(introText)
      .then(r => r.text())
      .then(introTextValue => this.setState({ introText: introTextValue }))
      
    setTimeout(() => this.setState({ introIsPlaying: false }), 2000)

    /// fetch char
    fetch('https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json')
      .then(res => res.json())
      .then(resJson => {
        this.setState({characters:resJson})
      })
      .catch((error) => {
        console.error(error);
      })
  }
  


  render() {
    console.log(this.state.characters)
    
    if (this.state.introIsPlaying) return <Intro text={this.state.introText} />
    return (
      <div>
      <Cockpit/>
      <HandleQuestion characters={this.state.characters} question={this.state.questions[0]} />     
      </div>
    );
  }
}

export default App;
